import traceback
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from backend.Logger.Logger import Logger
from backend.Exceptions.CustomExceptions import InsertDataException
from rest_framework import status
from rest_framework.response import Response

from backend.models import Certification


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def insertUserCertification(request):
    """
    API view for inserting user certification data.

    Args:
        request (HttpRequest): The HTTP request object.

    Returns:
        Response: A JSON response with the status and a message.

    Raises:
        InsertDataException: If there is an issue with the data being inserted.

    """
    data = request.data
    user = request.user

    try:
        # Check if startMonth is not numeric or is not in the range [1, 12].
        if not data.get('startMonth').isnumeric() or not 1 <= int(data.get('startMonth')) <= 12:
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Month')

        # Check if startYear is not numeric.
        if not data.get('startYear').isnumeric():
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Year')

        licence = None
        if data.get('license') != '':
            licence = data.get('license')

        # Create a new Education object with the provided data.
        Certification.objects.create(
            USR_CERT_NAME=data.get('certName'),
            USR_CERT_LICENSE=licence,
            USR_CERT_ISSUE=data.get("startMonth") + '/' + data.get("startYear"),
            USR_CERT_EXPIRY=data.get("endMonth") + '/' + data.get("endYear"),
            USR_CERT_DESCRIPTION = data.get('description'),
            user=user
        )

        # Return a success response.
        return Response({'status': status.HTTP_200_OK, 'message': "Created Successfully"})
    except InsertDataException as e:
        # Handle specific exceptions and return an error response.
        return Response({'status': e.status, 'message': e.message})
    except Exception as e:
        # Log and handle any unexpected exceptions.
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! Try Again'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserCertification(request):
    """
    Update user's certification information.

    Args:
        request (HttpRequest): The HTTP request object.

    Returns:
        Response: JSON response indicating the result of the update.

    Raises:
        InsertDataException: If there's an issue with the data provided in the request.
    """
    data = request.data
    user = request.user

    try:
        # Check and validate the startMonth and startYear values
        if not data.get('startMonth').isnumeric() and 0 > data.get('startMonth') > 13:
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Month')

        if not data.get('startYear').isnumeric():
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Year')

        licence = None
        if data.get('license') != '':
            licence = data.get('license')

        # Get the certification object to update
        certification = Certification.objects.get(USR_CERT_ID=data.get('certId'))

        # Update certification information with the data from the request
        certification.USR_CERT_NAME = data.get('certName')
        certification.USR_CERT_LICENSE = licence
        certification.USR_CERT_ISSUE = data.get("startMonth") + '/' + data.get("startYear")
        certification.USR_CERT_EXPIRY = data.get("endMonth") + '/' + data.get("endYear")
        certification.USR_CERT_DESCRIPTION = data.get('description')
        certification.user = user
        certification.save()

        # Return a success response
        return Response({'status': status.HTTP_200_OK, 'message': "Updated Successfully"})

    except InsertDataException as e:
        # Handle specific data validation exceptions and return an error response
        return Response({'status': e.status, 'message': e.message})

    except Exception as e:
        # Handle general exceptions, log the error, and return a generic error response
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response({'status': status.HTTP_400_BAD_REQUEST, 'message': 'Something Went Wrong! Try Again'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deleteUserCertification(request):
    """
    Endpoint for deleting user certification.

    Args:
        request: The HTTP request object.

    Returns:
        Response: HTTP response indicating the status and result of the operation.
    """
    user = request.user
    certId = request.data
    try:
        # Retrieve and delete the Education object
        certification = Certification.objects.get(_id=certId)
        certification.delete()
        return Response({'status': status.HTTP_200_OK, 'message': "Deleted Successfully"})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(user)} - {str(e)}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})