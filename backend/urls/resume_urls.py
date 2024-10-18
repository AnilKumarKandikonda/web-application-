from django.urls import path
from backend.views import resume_views as views

urlpatterns = [
    path('insert/', views.insertIntoResumeTable, name='insertIntoResumeTable'),
    path('getdetails/', views.getUserResumeDetails, name='getUserResumeDetails'),
    path('download/<str:pk>/', views.userDownloadResume, name='userDownloadResume'),
]
