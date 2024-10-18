import traceback
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from backend.Logger.Logger import Logger
from backend.Exceptions.CustomExceptions import InsertDataException, FetchDataException
from rest_framework import status
from rest_framework.response import Response

from backend.models import Address
from backend.serializers.AddressSerializer import AddressSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateUserAddress(request):
    """
    Update a user's address information.

    Args:
        request (HttpRequest): The HTTP request object containing user data.

    Returns:
        Response: A JSON response indicating the status of the update operation.

    Raises:
        InsertDataException: If the request data is invalid.

    Notes:
        This function is a Django REST framework view that is used to update a user's address.
        It expects a POST request with JSON data containing the following fields:
        - 'addressId': The unique identifier of the address to be updated.
        - 'unit': The new unit information.
        - 'addressType': The new address type.

        If the 'address' field is missing in the request data, it will raise an InsertDataException with
        a 400 Bad Request status and the message 'Invalid Month'. Otherwise, it will attempt to update
        the address information and return a success response with a 200 OK status.

        If any unexpected exception occurs during the operation, it will be logged and a 400 Bad Request
        response with the message 'Something Went Wrong! try Again' will be returned.

    Example Usage:
        Send a POST request with the required JSON data to update a user's address.
    """

    data = request.data
    user = request.user

    try:
        if not data.get('address'):
            raise InsertDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Month')

        address = Address.objects.get(USR_ADDRESS_ID=data.get('addressId'))
        address.USR_UNIT = data.get('unit')
        address.USR_ADDRESS_TYPE = data.get('addressType')
        address.USR_ADDRESS = data.get('address')
        address.user = user
        address.save()
        return Response({'status': status.HTTP_200_OK, 'message': "Updated Successfully"})
    except InsertDataException as e:
        return Response({'status': e.status, 'message': e.message})
    except Exception as e:
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserAddressDetails(request):
    """
    A view function to retrieve user address details.

    Args:
        request: The HTTP request object.

    Returns:
        Response: A response containing user address details or an error message.

    Note:
        This function expects a 'GET' request with parameters in the query string.

    Raises:
        FetchDataException: If there is an issue fetching data.
    """
    data = request.data
    user = request.user

    try:
        # Check the address type in the request data
        if data.get('addressType') in ['12', '13']:
            raise FetchDataException(status.HTTP_400_BAD_REQUEST, 'Invalid Address Type')

        # Get the user's address based on addressType and user
        address = Address.objects.filter(USR_ADDRESS_TYPE=data.get('addressType'), user=user)[0]

        # Serialize the address data
        serializer = AddressSerializer(address, many=False)

        # Return the serialized data in the response
        return Response({'status': status.HTTP_200_OK, 'message': serializer.data})

    except FetchDataException as e:
        # Handle the custom exception
        return Response({'status': e.status, 'message': e.message})

    except Exception as e:
        # Log the exception and return a generic error message
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response({'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! Try Again'})