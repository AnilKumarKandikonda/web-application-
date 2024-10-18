class UserRegistrationException(Exception):
    def __init__(self, status, message, page=0):
        self.message = message
        self.status = status
        self.page = page
        super().__init__(self.message)


class ContactFormDataException(Exception):
    def __init__(self, status, message):
        self.message = message
        self.status = status
        super().__init__(self.message)


class InsertDataException(Exception):
    def __init__(self, status, message):
        self.message = message
        self.status = status
        super().__init__(self.message)


class FetchDataException(Exception):
    def __init__(self, status, message):
        self.message = message
        self.status = status
        super().__init__(self.message)


class SubscriptionException(Exception):
    def __init__(self, status, message):
        self.message = message
        self.status = status
        super().__init__(self.message)

