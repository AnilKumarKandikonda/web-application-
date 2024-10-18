import traceback
from rest_framework.decorators import api_view
import datetime
from backend.EmailManager.EmailManager import EmailManager
from backend.Logger.Logger import Logger
from backend.Exceptions.CustomExceptions import ContactFormDataException
from backend.models import Contact
from rest_framework import status
from rest_framework.response import Response


@api_view(['POST'])
def generateTicket(request):
    """
    Handle a POST request to generate a ticket.

    Args:
        request: The HTTP POST request object containing user data.

    Returns:
        Response: A JSON response containing the result of the ticket generation process.

    Raises:
        ContactFormDataException: If the provided data is missing required fields.
        Exception: For other unexpected errors. Logs the error for debugging.

    This function processes incoming data to generate a unique ticket number,
    stores relevant data in the database, and sends an email notification to the user.
    """

    # Extract data from the HTTP POST request.
    data = request.data

    try:
        # Check if the 'email' field in the data is empty. If it is, raise an exception.
        if data.get('email') == '':
            raise ContactFormDataException(status.HTTP_400_BAD_REQUEST, 'E-mail field cannot be empty')

        # Check if the 'firstName' field in the data is empty. If it is, raise an exception.
        if data.get('firstName') == '':
            raise ContactFormDataException(status.HTTP_400_BAD_REQUEST, 'First Name cannot be empty')

        # Check if the 'lastName' field in the data is empty. If it is, raise an exception.
        if data.get('lastName') == '':
            raise ContactFormDataException(status.HTTP_400_BAD_REQUEST, 'Last Name cannot be empty')

        # Get the current time and extract the hour and minute and second.
        current_time = datetime.datetime.now()
        current_hour = current_time.hour
        current_minute = current_time.minute
        current_second = current_time.second
        # Create a unique 'ticketNumber' by concatenating parts of the input data and current time.
        ticketNumber = data.get('firstName')[:2] + data.get('lastName')[:2] + data.get('email')[
                                                                              :2] + f"{current_hour:02}" + f"{current_minute:02} "+f"{current_second:02} "

        # Create a new Contact object in the database with the extracted data and the generated 'ticketNumber'.
        Contact.objects.create(
            CT_EMAIL=data.get('email'),
            CT_PHONE=data.get('phone'),
            CT_WEBSITE=data.get('website'),
            CT_DESCRIPTION=data.get('message'),
            CT_FIRST_NAME=data.get('firstName'),
            CT_LAST_NAME=data.get('lastName'),
            CT_ORGANIZATION=data.get('organization'),
            CT_TICKET_NUMBER=ticketNumber
        )

        # Send an email with the 'ticketNumber' to the provided email address and check if it was successful.
        emailSendStatus = EmailManager.sendTicketGeneration(data.get('email'), ticketNumber)

        # If the email was successfully sent, return a success response.
        if emailSendStatus:
            return Response(
                {'status': status.HTTP_200_OK, 'message': f'Submitted, your ticket reference number: {ticketNumber}.'})
        # If there was a problem sending the email, return an accepted response with a message.
        else:
            return Response({'status': status.HTTP_202_ACCEPTED,
                             'message': 'Form submitted, problem with processing email, We will get back to you shortly!.'})

    # Handle exceptions to type 'ContactFormDataException'.
    except ContactFormDataException as e:
        return Response({'status': e.status, 'message': e.message})

    # Handle other exceptions (generic exception handling).
    except Exception as e:
        # Log the error information and return an error response.
        Logger.writeIntoErrorLogFile(f'{str(e)} - {str(traceback.print_exc())}')
        return Response(
            {'status': status.HTTP_400_BAD_REQUEST, 'message': f'Something Went Wrong! try Again'})
