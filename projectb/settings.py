"""
Django settings for projectb project.

Generated by 'django-admin startproject' using Django 4.2.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

# test change
"""
HERE IN THIS PROJECT FOR THE PRODUCTION DEPLOYNMENT 
1. MAKE THE DEBUG FALSE
2. CHANGE NAMES IN THE ALLOWED HOSTS
3. SITE URL
4. CORS_ALLOW_ALL_ORIGINS
5. STRIPE PAYMENT KEY
6. EMAIL API KEY
"""

from pathlib import Path
from datetime import timedelta
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-)h6*wui^1v%573$nm$g*wm%^$at-ngcr)$ajesz=pvi-pcbbdk'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'backend',
]

"""
ENTERED THIS MANUALLY
for user token generation
"""

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ]
}

"""
ENTERED THIS MANUALLY
for customizing the token
"""

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': False,
    'UPDATE_LAST_LOGIN': False,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
    'TOKEN_USER_CLASS': 'rest_framework_simplejwt.models.TokenUser',
    'JTI_CLAIM': 'jti',
    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),

    # custom
    'AUTH_COOKIE': 'access',
    'AUTH_COOKIE_REFRESH': 'refresh',  # enables cookies if the value is set
    'AUTH_COOKIE_DOMAIN': None,  # none for standard domain cookie
    'AUTH_COOKIE_SECURE': True,  # whether the auth cookie should be secure
    'AUTH_COOKIE_HTTP_ONLY': True,  # http only cookie flag,its' not fetched by javascript
    'AUTH_COOKIE_PATH': '/',  # auth cookie path
    'AUTH_COOKIE_SAMESITE': "None",  # whether to set the flag restricting cookie leaks on cross-site request,
}

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'projectb.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'frontend/build'),
            BASE_DIR / 'static/'
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'projectb.wsgi.application'
"""ASGI APPLICATION"""
# ASGI_APPLICATION = "projectb.asgi.application"

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'projectb',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'"
        }
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/images/'

STATICFILES_DIRS = [
    BASE_DIR / 'static',
    BASE_DIR / 'frontend/build/static'
]

MEDIA_ROOT = 'D:/PROJECTB_MEDIA/'

# python manage.py collectstatic - this will collect the static files and place in this folder
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

"""
THIS IS ADDED MANUALLY
this will allow requests from all the sources
"""
CORS_ALLOW_ALL_ORIGINS = True

"""
THIS IS ADDED MANUALLY
this is used for designing the custom user with the varialbe name as same and the 
appname and folloed by . with model name in that app
"""
AUTH_USER_MODEL = 'backend.NewUser'

"""EMAIL API FROM SENDGRID"""
EMAIL_BACKEND = 'sendgrid_backend.SendgridBackend'
EMAIL_SENDGRID_API = "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"

"""STRIPE PAYMENTS API KEY"""
STRIPE_SECRET_KEY = 'sk_test_51McYICSFK52NNjGvJgsIT8GTtXRYjs6nUboznBj5HrfNAml5wV2yLmgA7EBRfTBU5vYOuScKilh46ZvLO5n3G502004dFeKwYq'

"""
SITE URL WHICH IS THE FRONT END URL
"""

SITE_URL = 'http://localhost:3000'

"""
FIREBASE INITIALIZATION
"""
FIREBASE_CREDENTIALS_FILE = os.path.join(BASE_DIR, 'credentials.json')

"""
OTHER FIELDS TO CHANGE AS NEEDED
"""
USER_JOB_POST_LIMIT = 10


"""
MONGO DB URL
"""

MONGO_DB_URL = "mongodb+srv://anil:anil@projectb.8vc7u90.mongodb.net/?retryWrites=true&w=majority"