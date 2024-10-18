from django.urls import path
from backend.views import experience_views as views

urlpatterns = [
    path('insert/', views.insertUserExperience, name='insertUserExperience'),
    path('update/', views.updateUserExperience, name='updateUserExperience'),
    path('delete/', views.deleteUserExperience, name='deleteUserExperience'),
]
