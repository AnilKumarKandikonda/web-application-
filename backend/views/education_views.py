import traceback
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from backend.Logger.Logger import Logger
from backend.Exceptions.CustomExceptions import InsertDataException
from rest_framework import status
from rest_framework.response import Response

from backend.models import Education


# API view to insert user education
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def insertUserEducation(request):
    """
    Endpoint for inserting user education.

    Args:
        request: The HTTP request object.

    Returns:
        Response: HTTP response indicating the status and result of the operation.
    """
    data = request.data
    user = request.user
    try:
        # Check for valid startMonth and startYear
        if not data.get('startMonth').isnumeric() and 0 > data.get('startMonth') > 13:
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Month')
        if not data.get('startYear').isnumeric():
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Year')

        # Create an Education object and save it
        Education.objects.create(
            USR_EDU_COLLEGE=data.get('collegeName'),
            USR_EDU_COURSE_TYPE=data.get('courseType'),
            USR_EDU_START_DATE=data.get("startMonth") + '/' + data.get("startYear"),
            USR_EDU_END_DATE=data.get("endMonth") + '/' + data.get("endYear"),
            USR_EDU_DESCRIPTION=data.get('description'),
            USR_EDU_COURSE_NAME=data.get('courseName'),
            USR_EDU_LOCATION=data.get('location'),
            user=user
        )
        return Response({'status': status.HTTP_200_OK, 'message': "Created Successfully"})
    except InsertDataException as e:
        return Response({'status': e.status, 'message': e.message})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})


# API view to update user education
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserEducation(request):
    """
    Endpoint for updating user education.

    Args:
        request: The HTTP request object.

    Returns:
        Response: HTTP response indicating the status and result of the operation.
    """
    data = request.data
    user = request.user
    try:
        # Check for valid startMonth and startYear
        if not data.get('startMonth').isnumeric() and 0 > data.get('startMonth') > 13:
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Month')
        if not data.get('startYear').isnumeric():
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Year')

        # Retrieve and update the Education object
        education = Education.objects.get(USR_EDU_ID=data.get('educationId'))
        education.USR_EDU_COLLEGE = data.get('collegeName')
        education.USR_EDU_COURSE_TYPE = data.get('courseType')
        education.USR_EDU_START_DATE = data.get("startMonth") + '/' + data.get("startYear")
        education.USR_EDU_END_DATE = data.get("endMonth") + '/' + data.get("endYear")
        education.USR_EDU_DESCRIPTION = data.get('description')
        education.USR_EDU_COURSE_NAME = data.get('courseName')
        education.USR_EDU_LOCATION = data.get('location')
        education.save()
        return Response({'status': status.HTTP_200_OK, 'message': "Updated Successfully"})
    except InsertDataException as e:
        return Response({'status': e.status, 'message': e.message})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})


# API view to delete user education
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deleteUserEducation(request):
    """
    Endpoint for deleting user education.

    Args:
        request: The HTTP request object.

    Returns:
        Response: HTTP response indicating the status and result of the operation.
    """
    user = request.user
    educationId = request.data
    try:
        # Retrieve and delete the Education object
        education = Education.objects.get(_id=educationId)
        education.delete()
        return Response({'status': status.HTTP_200_OK, 'message': "Deleted Successfully"})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(user)} - {str(e)}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})
