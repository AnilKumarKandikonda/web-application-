import re


class DataValidation:
    def __int__(self) -> None:
        pass

    @staticmethod
    def _is_valid_email(email):
        # Define a regular expression pattern for a basic email validation
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

        # Use the re.match function to check if the email matches the pattern
        if re.match(pattern, email):
            return True
        else:
            return False

    @staticmethod
    def _is_valid_password(password):
        pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[^\w\s]).{8,}$'
        if re.match(pattern, password):
            return True
        else:
            return False

    @staticmethod
    def _is_password_match(password, confirm_password):
        if password == confirm_password:
            return True
        else:
            return False

    @classmethod
    def validateRegisterFormData(cls,data):
        if data.get('firstName')['value'] == '':
            return {'isValid': False, 'message': 'Enter Valid Name', 'page': 1}
        if data.get('lastName')['value'] == '':
            return {'isValid': False, 'message': 'Enter Valid Name', 'page': 1}
        if data.get('usrEmail')['value'] == '' and \
                not cls._is_valid_email(data.get('usrEmail')['value']):
            return {'isValid': False, 'message': 'Enter Valid Email', 'page': 1}
        if int(data.get('gender')['value']['value']) == -1:
            return {'isValid': False, 'message': 'Enter Valid Gender', 'page': 1}
        if data.get('day')['value'].isnumeric():
            if not 0 < int(data.get('day')['value']) <= 31:
                return {'isValid': False, 'message': 'Enter Valid Day', 'page': 1}
        if data.get('month')['value'].isnumeric():
            if not 0 < int(data.get('month')['value']) <= 12:
                return {'isValid': False, 'message': 'Enter Valid Month', 'page': 1}
        if data.get('year')['value'].isnumeric():
            if not len(data.get('year')['value']) == 4:
                return {'isValid': False, 'message': 'Enter Valid Year', 'page': 1}
        if not cls._is_valid_password(data.get('password')['value']):
            return {'isValid': False, 'message': 'Enter Valid password', 'page': 1}
        if not cls._is_password_match(data.get('password')['value'], data.get('confirmPassword')['value']):
            return {'isValid': False, 'message': 'password Not Matched', 'page': 1}
        if int(data.get('usrCountry')['value']['value']) == -1:
            return {'isValid': False, 'message': 'Enter Valid country', 'page': 2}
        if int(data.get('usrState')['value']['value']) == -1:
            return {'isValid': False, 'message': 'Enter Valid state', 'page': 2}
        if data.get('usrPostal')['value'] == '':
            return {'isValid': False, 'message': 'Enter Valid postal', 'page': 2}
        if data.get('usrPhone')['value'] == '' and len(data.get('usrPhone')['value']) != 10:
            return {'isValid': False, 'message': 'Enter Valid phone', 'page': 2}
        if data.get('usrPhone')['value'] == '' and len(data.get('usrPhone')['value']) != 10:
            return {'isValid': False, 'message': 'Enter Valid phone', 'page': 2}
        if int(data.get('usrOptionField')['value']) == 34:
            if data.get('usrPreferenceOther')['value'] == '':
                return {'isValid': False, 'message': 'Text field should not be null', 'page': 3}
        if not data.get('termsConditions')['value']:
            return {'isValid': False, 'message': 'accept terms and conditions', 'page': 3}
        return {'isValid': True, 'message': '', 'page': 0}


    @staticmethod
    def userExperienceValidation(data):
        # Check if startMonth is a valid numeric value between 1 and 12.
        if not data.get('startMonth').isnumeric() or not 1 <= int(data.get('startMonth')) <= 12:
            return {'isValid': False, 'message': 'Invalid Month'}

        # Check if startYear is a valid numeric value.
        if not data.get('startYear').isnumeric():
            return {'isValid': False, 'message': 'Invalid Year'}

        # Check if country is a valid numeric value (if necessary).
        if not data.get('country').isnumeric():
            return {'isValid': False, 'message': 'Invalid country'}

        # Check if state is a valid numeric value (if necessary).
        if not data.get('state').isnumeric():
            return {'isValid': False, 'message': 'Invalid State'}

        # Check if the position field is not empty.
        if data.get('position') == '':
            return {'isValid': False, 'message': 'Invalid Position'}
        return {'isValid': True, 'message': ''}
