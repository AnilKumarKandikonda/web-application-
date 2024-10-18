import traceback

from django.http import FileResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from backend.Logger.Logger import Logger
from backend.Exceptions.CustomExceptions import SubscriptionException
from rest_framework import status
from rest_framework.response import Response
from backend.models import Resume, NewUser
from datetime import datetime
import pytz  # Import the pytz module

from backend.serializers.ResumeSerializer import ResumeSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def insertIntoResumeTable(request):
    """
    This view function is used to insert or update a user's resume in the Resume table.

    Args:
        request: The HTTP request object.

    Returns:
        A Response object with a status code and message indicating the result of the operation.
    """
    user = request.user
    try:
        # Attempt to retrieve the user's existing resume
        userResume = Resume.objects.get(user=user.id)
    except Resume.DoesNotExist:
        # If the user's resume does not exist, set it to False
        userResume = None
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! Try Again'})

    try:
        if userResume is not None:
            # If the user's resume exists
            userDetails = NewUser.objects.get(id=user.id)
            local_timezone = pytz.timezone(userDetails.USR_TIMEZONE)
            print('-------------------')
            print(local_timezone)
            local_time = datetime.now(local_timezone)
            current_time = local_time.astimezone(pytz.UTC)
            print(current_time)
            if userResume.RS_REVIEW_COMPLETED and not userResume.RS_INITIAL_REVIEW:
                if userDetails.USR_RESUME_SUB and userResume.RS_REVIEW_COUNT > 0:
                    userResume.RS_RESUME = request.FILES.get('userResume')
                    userResume.RS_UPDATED = current_time
                    userResume.RS_INITIAL_REVIEW = False
                    userResume.RS_UPDATED = current_time
                    # if this is true the user cannot upload the resume
                    userResume.RS_REVIEW = False
                    userResume.save()
                    # Return a success response
                    return Response({'message': 'Submitted for review successfully', 'status': status.HTTP_200_OK})
                else:
                    # Raise an exception if the user's resume submission is not allowed
                    raise SubscriptionException(status.HTTP_402_PAYMENT_REQUIRED,
                                                "You have reached the maximum resume review count limit.")
            elif not userResume.RS_REVIEW:
                userResume.RS_RESUME = request.FILES.get('userResume')
                userResume.RS_UPDATED = current_time
                userResume.save()
                return Response({'message': 'Update Successful', 'status': status.HTTP_200_OK})
            else:
                raise SubscriptionException(1001, "under review, cannot upload again... ")
        else:
            # If the user's resume doesn't exist, create a new one
            print(request.FILES.get('userResume'))
            Resume.objects.create(
                RS_RESUME=request.FILES.get('userResume'),
                RS_INITIAL_REVIEW=True,
                RS_REVIEW=False,
                user=user
            )
            # Return a success response
            return Response({'status': status.HTTP_200_OK, 'message': "Created Successfully"})
    except SubscriptionException as e:
        # Handle the subscription-related exception
        return Response({'status': e.status, 'message': e.message})
    except Exception as e:
        # Log and handle other exceptions
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! Try Again'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserResumeDetails(request):
    """
    View function to retrieve the resume details of the authenticated user.

    Args:
        request (HttpRequest): The HTTP request object.

    Returns:
        Response: A Response object containing the resume details or an error message.

    Raises:
        Exception: Any unhandled exceptions are logged and a generic error message is returned.
    """
    user = request.user

    try:
        # Attempt to retrieve the user's resume from the database
        userResume = Resume.objects.get(user=user)
        # Serialize the resume data
        serializer = ResumeSerializer(userResume, many=False)
        print(serializer.data)
        # Return a success response with the serialized data
        return Response({'status': status.HTTP_200_OK, 'message': serializer.data})
    except Resume.DoesNotExist:
        # If the user's resume does not exist, return an empty response
        return Response({'status': status.HTTP_204_NO_CONTENT, 'message': "", "count": 1})
    except Exception as e:
        # Log and handle other exceptions
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        # Return a response indicating a bad request and an error message
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST,
             'message': f'Something Went Wrong! E-mail us or try after sometime.'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userDownloadResume(request, pk):
    try:
        resume = Resume.objects.get(pk=pk, user=request.user)
        response = FileResponse(open(resume.RS_RESUME.path, 'rb'))
        return response

    except Resume.DoesNotExist:
        # If the user's resume does not exist, return an empty response
        return Response({'status': status.HTTP_204_NO_CONTENT, 'message': "", "count": 1})

    except Exception as e:
        # Log and handle other exceptions
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        # Return a response indicating a bad request and an error message
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST,
             'message': f'Something Went Wrong! E-mail us or try after sometime.'})
