"""
URL configuration for projectb project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

"""
TO ATTACH THE IMAGES TO THE URL
we need media url to the media url
"""
from django.conf import settings

"""
THIS FUNCITON ALLOWS TO CONNECT IMAGES TO THE URLS 
EXAMPLE -> localhost:8000/image.png
"""
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('backend.urls.auth_urls')),
    path('api/gfb/', include('backend.urls.firebase_urls')),
    path('api/ticket/', include('backend.urls.contact_urls')),
    path('api/user/edu/', include('backend.urls.education_urls')),
    path('api/user/resume/', include('backend.urls.resume_urls')),
]
# testing
"""
HERE WE ARE SETTING UP TEH URL AND 
AND MAKE SURE WHICH FOLDER WE HAVE TO LOOK INTO
"""

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
