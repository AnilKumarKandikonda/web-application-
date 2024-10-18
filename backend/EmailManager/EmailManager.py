import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.conf import settings
from rest_framework import status


class EmailManager:
    def __int__(self) -> None:
        pass

    @staticmethod
    def sendRegisterEmail(email):
        message = Mail(
            from_email='anil.projectb@outlook.com',
            to_emails=[email, ],
            subject='Sending with Twilio SendGrid is Fun',
            html_content='<strong>and easy to do anywhere, even with Python</strong>')

        try:
            sg = SendGridAPIClient(settings.EMAIL_SENDGRID_API)
            response = sg.send(message)
            return {'status': response.status_code, 'message': 'sent successfully'}
        except Exception as e:
            return {'status': status.HTTP_404_NOT_FOUND, 'message': 'un-successfull'}

    @staticmethod
    def sendTicketGeneration(email, ticket_number):
        message = Mail(
            from_email='anil.projectb@outlook.com',
            to_emails=[email, ],
            subject='Sending with Twilio SendGrid is Fun',
            html_content=f'<strong>ticket generation {ticket_number}</strong>')

        try:
            sg = SendGridAPIClient(settings.EMAIL_SENDGRID_API)
            response = sg.send(message)
            print(response.status_code)
            if response.status_code == 202:
                return True
            else:
                return False
        except Exception as e:
            return False
