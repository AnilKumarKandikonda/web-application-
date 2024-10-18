from django.urls import path
from backend.views import contact_views as views

urlpatterns = [
    path('generateticket/', views.generateTicket, name='generateTicket'),
]
