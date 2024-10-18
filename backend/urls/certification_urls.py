from django.urls import path
from backend.views import certification_views as views

urlpatterns = [
    path('insert/', views.insertUserCertification, name='insertUserCertification'),
    path('update/', views.updateUserCertification, name='updateUserCertification'),
    path('delete/', views.deleteUserCertification, name='deleteUserCertification'),
]
