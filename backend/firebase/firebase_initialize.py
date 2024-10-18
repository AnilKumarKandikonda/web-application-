import firebase_admin
from firebase_admin import credentials
from django.conf import settings

cred = credentials.Certificate(settings.FIREBASE_CREDENTIALS_FILE)

# Initialize Firebase Admin with the credentials
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://projectb-bda62-default-rtdb.firebaseio.com'
})