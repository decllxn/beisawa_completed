from django.urls import path
from .views import OfferListView

urlpatterns = [
    path('api/', OfferListView.as_view(), name='offer-list'),
]