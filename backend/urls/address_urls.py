from django.urls import path
from backend.views import address_views as views

urlpatterns = [
    path('update/', views.updateUserAddress, name='updateUserAddress'),
    path('detailsaddr/', views.getUserAddressDetails, name='getUserAddressDetails'),
    path('shipdetails/', views.getUserShipAddressDetails, name='getUserShipAddressDetails'),
]
