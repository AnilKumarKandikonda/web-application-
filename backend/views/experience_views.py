import traceback
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from backend.DataValidation.DataValidation import DataValidation
from backend.Logger.Logger import Logger
from backend.Exceptions.CustomExceptions import InsertDataException
from rest_framework import status
from rest_framework.response import Response

from backend.models import Experience


# Define the API view and required permission classes.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def insertUserExperience(request):
    """
    API endpoint for inserting user experience data.

    Args:
        request (Request): The HTTP request object containing user data.

    Returns:
        Response: A JSON response indicating success or failure.
    """
    data = request.data
    user = request.user

    try:
        validation = DataValidation.userExperienceValidation(data)
        if not validation.get('isValid'):
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, validation.get('message'))

        # Initialize optional fields to None if they exist.
        userSkills = None
        expDescription = None
        postalCode = None

        if data.get('expSkills') != '':
            userSkills = data.get('expSkills')

        if data.get('expDescription') != '':
            expDescription = data.get('expDescription')

        if data.get('postalCode') != '':
            postalCode = data.get('postalCode')

        # Check if department is a valid numeric value (if necessary).
        if not data.get('department').isnumeric() and int(data.get('department')) == -1:
            department = None
        else:
            department = data.get('department')

        # Create a new Experience object with the provided data.
        Experience.objects.create(
            USR_EXP_POSITION=data.get('position'),
            USR_EXP_SKILLS=userSkills,
            USR_EXP_DESCRIPTION=expDescription,
            USR_EXP_START=data.get("startMonth") + '/' + data.get("startYear"),
            USR_EXP_END=data.get("endMonth") + '/' + data.get("endYear"),
            USR_EXP_COUNTRY=data.get('country'),
            USR_EXP_STATE=data.get('state'),
            USR_EXP_POSTAL=postalCode,
            USR_EXP_DEPARTMENT=department,
            user=user
        )

        # Return a success response.
        return Response({'status': status.HTTP_200_OK, 'message': "Created Successfully"})

    except InsertDataException as e:
        # Handle custom exception and return an error response.
        return Response({'status': e.status, 'message': e.message})

    except Exception as e:
        # Log the exception and return a generic error response.
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})


# API view to update user education
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserExperience(request):
    """
    Endpoint for updating user experience.

    Args:
        request: The HTTP request object.

    Returns:
        Response: HTTP response indicating the status and result of the operation.
    """
    data = request.data
    user = request.user
    try:
        validation = DataValidation.userExperienceValidation(data)
        if not validation.get('isValid'):
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, validation.get('message'))

        userSkills = None
        expDescription = None
        postalCode = None

        if data.get('expSkills') != '':
            userSkills = data.get('expSkills')

        if data.get('expDescription') != '':
            expDescription = data.get('expDescription')

        if data.get('postalCode') != '':
            postalCode = data.get('postalCode')

        # Check if department is a valid numeric value (if necessary).
        if not data.get('department').isnumeric() and int(data.get('department')) == -1:
            department = None
        else:
            department = data.get('department')

        # Retrieve and update the experience object
        experience = Experience.objects.get(USR_EXP_ID=data.get('experienceId'), user=user)
        experience.USR_EXP_POSITION = data.get('position')
        experience.USR_EXP_SKILLS = userSkills
        experience.USR_EXP_DESCRIPTION = expDescription
        experience.USR_EXP_START = data.get("startMonth") + '/' + data.get("startYear")
        experience.USR_EXP_END = data.get("endMonth") + '/' + data.get("endYear")
        experience.USR_EXP_COUNTRY = data.get('country')
        experience.USR_EXP_STATE = data.get('state')
        experience.USR_EXP_POSTAL = postalCode
        experience.USR_EXP_DEPARTMENT = department
        experience.save()
        return Response({'status': status.HTTP_200_OK, 'message': "Updated Successfully"})
    except InsertDataException as e:
        return Response({'status': e.status, 'message': e.message})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})


# API view to delete user experience
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deleteUserExperience(request):
    """
    Endpoint for deleting user experience.

    Args:
        request: The HTTP request object.

    Returns:
        Response: HTTP response indicating the status and result of the operation.
    """
    user = request.user
    experienceId = request.data
    try:
        # Retrieve and delete the Education object
        experience = Experience.objects.get(USR_EXP_ID=experienceId, user=user)
        experience.delete()
        return Response({'status': status.HTTP_200_OK, 'message': "Deleted Successfully"})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(user)} - {str(e)}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})
