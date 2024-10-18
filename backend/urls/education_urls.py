from django.urls import path
from backend.views import education_views as views

urlpatterns = [
    path('insert/', views.insertUserEducation, name='insertUserEducation'),
    path('update/', views.updateUserEducation, name='updateUserEducation'),
    path('delete/', views.deleteUserEducation, name='deleteUserEducation'),
]
