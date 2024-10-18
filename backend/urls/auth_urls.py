from django.urls import path
from backend.views import auth_views as views

urlpatterns = [
    # path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/', views.userLogin, name='userLogin'),
    path('register/', views.registerUser, name='registerUser'),
]
