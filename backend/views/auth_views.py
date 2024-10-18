import traceback
from datetime import date
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.db import OperationalError
from django.utils.encoding import smart_bytes, smart_str, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from django.middleware import csrf
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt import tokens, views as jwt_views
from rest_framework import status

from backend.DataLayer.mongodbLayer import MongoDBLayer
from backend.DataValidation.DataValidation import DataValidation
from backend.EmailManager.EmailManager import EmailManager
from backend.Exceptions.CustomExceptions import UserRegistrationException
from backend.Logger.Logger import Logger
from backend.serializers.AuthSerializer import AuthSerializerWithToken, LoginSerializer
from backend.models.UserModel import NewUser, Address
from backend.serializers.UserSerializer import UserSerializer
from projectb import settings

"""
extends this class from the parent class
"""


def get_user_tokens(user):
    refresh = tokens.RefreshToken.for_user(user)
    return {
        'refresh_token': str(refresh),
        'access_token': str(refresh.access_token)
    }


@api_view(['POST'])
def userLogin(request):
    # print(request.data)
    try:
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        user = authenticate(email=email, password=password)

        if user is not None:
            userTokens = get_user_tokens(user)
            serializer = UserSerializer(user, many=False)
            res = Response()
            res.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                value=userTokens['refresh_token'],
                expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )

            res.set_cookie('userId', serializer.data.get('_id'))
            res.set_cookie('firstName', serializer.data.get('first_name'))
            res.set_cookie('lastName', serializer.data.get('last_name'))
            res.set_cookie('email', serializer.data.get('email'))
            res.set_cookie('token', userTokens['access_token'])
            res.data = {**userTokens, **serializer.data}
            res["X-CSRFToken"] = csrf.get_token(request)
            return res

        raise AuthenticationFailed({'message': 'No active account found with the given credentials.',
                                    'status': status.HTTP_404_NOT_FOUND})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'userLogin - {str(e)} - {str(traceback.print_exc())}')
        return Response({'message': 'something went wrong while logging.', 'status': status.HTTP_400_BAD_REQUEST})


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    def validate(self, attrs):
        try:
            data = super().validate(attrs)
            serializer = AuthSerializerWithToken(self.user).data
            access = ""
            refresh = ""
            for k, v in serializer.items():
                data[k] = v
                if k == "access":
                    access = v
                if k == "refresh":
                    refresh = v

            res = Response()
            res.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                value=data['token'],
                expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )
            res.data = data
            res.set_cookie('userId', serializer.data.get('_id'))
            res.set_cookie('firstName', serializer.data.get('first_name'))
            res.set_cookie('lastName', serializer.data.get('last_name'))
            res.set_cookie('email', serializer.data.get('email'))
            res.set_cookie('token', access)
            res.set_cookie('refresh', refresh)
            res.data = {**serializer.data}
            # res["X-CSRFToken"] = csrf.get_token(request)
            # return {'message': data, 'status': status.HTTP_200_OK}
            return res
        except AuthenticationFailed as failed:
            return Response({'message': 'No active account found with the given credentials.',
                             'status': status.HTTP_404_NOT_FOUND})
        except Exception as e:
            Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
            return Response({'message': 'something went wrong while logging.', 'status': status.HTTP_400_BAD_REQUEST})


#
# TOKEN GENERATION FOR THE USER WHO LOGGED IN
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# when the user enters the email for password reset,#
# this API will be called
@api_view(['POST'])
def passwordResetByEmail(request):
    try:
        email = request.data
        if NewUser.objects.filter(email=email).exists():
            user = NewUser.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = f'/#/users/passwordreset/{uidb64}/{token}/'
            absurl = 'http://' + current_site + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                         absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your password'}

            # EmailManager.send_email(data)
            return Response({'success': 'Email sent to reset password ',
                             'url': absurl, 'status': status.HTTP_200_OK}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No User found with this E-mail', 'status': status.HTTP_204_NO_CONTENT})
    except Exception as e:
        return Response({'error': 'Something Went Wrong', 'status': status.HTTP_400_BAD_REQUEST})


# once the user receives the email, then this password token check API will be called
@api_view(['POST'])
def passwordTokenCheckAPI(request):
    data = request.data
    print(data)
    try:
        token = data.get('token')
        uidb64 = data.get('key')
        id = smart_str(urlsafe_base64_decode(uidb64))
        user = NewUser.objects.get(id=id)
        if not PasswordResetTokenGenerator().check_token(user, token):
            return Response(
                {'error': 'session expired, Please request a new token', 'status': status.HTTP_400_BAD_REQUEST},
                status=status.HTTP_400_BAD_REQUEST)
        return Response(
            {'success': True, 'message': 'credentials valid', 'uidb64': uidb64,
             'token': token, 'email': user.email, 'status': status.HTTP_200_OK},
            status=status.HTTP_200_OK)
    except DjangoUnicodeDecodeError as identifier:
        try:
            if not PasswordResetTokenGenerator().check_token(user):
                return Response({'error': 'session expired, Please request a new token',
                                 'status': status.HTTP_400_BAD_REQUEST},
                                status=status.HTTP_400_BAD_REQUEST)
        except UnboundLocalError as e:
            return Response({'error': 'Token is not valid, please request a new one',
                             'status': status.HTTP_400_BAD_REQUEST},
                            status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': 'Token is not valid, please request a new one',
                         'status': status.HTTP_400_BAD_REQUEST},
                        status=status.HTTP_400_BAD_REQUEST)


# when the user enters the new password details, this API will be called.
@api_view(['POST'])
def setNewPasswordAPI(request):
    data = request.data
    print(data)
    try:
        password = data.get('password')
        cpassword = data.get('cPassword')
        token = data.get('token')
        uidb64 = data.get('key')
        userid = smart_str(urlsafe_base64_decode(uidb64))

        user = NewUser.objects.get(id=userid)

        if not PasswordResetTokenGenerator().check_token(user, token):
            raise AuthenticationFailed('The reset link is invalid', 401)
        print(password == cpassword and len(password) >= 8)
        print(password == cpassword)
        print(len(password) >= 8)
        if password == cpassword and len(password) >= 8:
            user.set_password(password)
            user.save()
            return Response({'status': status.HTTP_200_OK, 'message': 'Password Changed Successfully!'})
        else:
            return Response(
                {'status': status.HTTP_400_BAD_REQUEST, 'message': 'Invalid Credentials, Please Try Again.'})
    except AuthenticationFailed:
        return Response({'error': 'Authentication failed!. Invalid link', 'status': status.HTTP_400_BAD_REQUEST})
    except Exception as e:
        print(traceback.print_exc())
        return Response({'error': 'Something Went Wrong', 'status': status.HTTP_400_BAD_REQUEST})


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    refresh = None

    def validate(self, attrs, jwt_exceptions=None):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise jwt_exceptions.InvalidToken(
                'No valid token found in cookie \'refresh\'')


class CookieTokenRefreshView(jwt_views.TokenRefreshView):
    serializer_class = CookieTokenRefreshSerializer

    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get("refresh"):
            response.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE_REFRESH'],
                value=response.data['refresh'],
                expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )

            del response.data["refresh"]
        response["X-CSRFToken"] = request.COOKIES.get("csrftoken")
        return super().finalize_response(request, response, *args, **kwargs)


'''
REGISTER USER
'''


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        validation = DataValidation.validateRegisterFormData(data)
        if not validation.get('isValid'):
            raise UserRegistrationException(status.HTTP_400_BAD_REQUEST, validation.get('message'),
                                            validation.get('page'))
        if data:
            dob = date(int(data.get('year')['value']), int(data.get('month')['value']), int(data.get('day')['value']))
            jobPreferences = []
            if data.get('usrJobPreferences')['value'] is not None:
                for item in data.get('usrJobPreferences')['value']:
                    jobPreferences.append(item['value'])

            user = NewUser.objects.create_user(
                first_name=data.get('firstName')['value'],
                last_name=data.get('lastName')['value'],
                email=data.get('usrEmail')['value'],
                USR_GENDER=int(data.get('gender')['value']['value']),
                USR_DATEOFBIRTH=dob,
                password=data.get('password')['value'],
                username=data.get('usrEmail')['value'],
                USR_PHONE=data.get('usrPhone')['value'],
                USR_HLF=data.get('usrOptionField')['value'],
                USR_OTHER_PREFERENCE=data.get('usrPreferenceOther')['value'],
                USR_JOB_PREFERENCES=','.join(jobPreferences)
            )
            address = Address.objects.create(
                USR_COUNTRY=int(data.get('usrCountry')['value']['value']),
                USR_STATE=int(data.get('usrState')['value']['value']),
                USR_POSTAL=data.get('usrPostal')['value'],
                USR_ADDRESS_TYPE=12,
                user=user,
                USR_CITY=int(data.get('usrState')['value']['value']),
            )
            emailSendStatus = EmailManager.sendRegisterEmail(user.email)
            user_mongodb = {
                "user_id": user.id,
                "first_name": user.first_name,
                "last_name": user.first_name,
                "user_hlf": user.USR_HLF,
                "user_message_request": user.USR_MESSAGE_REQUEST,
                "user_gender": user.USR_GENDER,
                "email": user.email,
                "country": address.USR_COUNTRY,
                "state": address.USR_STATE,
                "city": address.USR_CITY,
                "postal": address.USR_POSTAL
            }
            if MongoDBLayer.storeUserToDB(user_mongodb):
                user.USR_MONGO_STORED = True
                user.save()
                return Response({'status': status.HTTP_200_OK, 'message': 'Registration Successfully Completed.'})
            else:
                user.USR_MONGO_STORED = False
                user.USR_NOTES = "Something wrong with message system with your account, we are working on it to resolve."
                user.save()
                return Response({'status': status.HTTP_200_OK, 'message': 'Registered Successfully.'})
        else:
            return UserRegistrationException(status.HTTP_400_BAD_REQUEST, 'Something went wrong, you can reach '
                                                                          'out to support to get registered or '
                                                                          'try again after sometime!.', 0)

    except OperationalError as e:
        print(traceback.print_exc())
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong', 'page': 0})
    except UserRegistrationException as e:
        return Response({'status': e.status, 'message': e.message, 'page': e.page})
    except Exception as e:
        print(traceback.print_exc())
        Logger.writeIntoErrorLogFile(f'{data["usrEmail"]["value"]} - {str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'User with email: {data["usrEmail"]["value"]} already '
                                                               f'exists', 'page': 0})
