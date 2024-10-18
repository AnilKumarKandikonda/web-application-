"""
ASGI config for projectb project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'projectb.settings')

# Initialize Django ASGI application early to ensure the AppRegistry
# is populated before importing code that may import ORM models.
application = get_asgi_application()

# from . import urls  # noqa isort:skip
#
# application = ProtocolTypeRouter({
#     "http": django_asgi_app,
#     "websocket": URLRouter(urls.websocket_urlpatterns),
# })
