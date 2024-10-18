from django.urls import path
from backend.views import firebase_views as views

urlpatterns = [
    # path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('countries/', views.getCountriesList, name='getCountriesList'),
]
