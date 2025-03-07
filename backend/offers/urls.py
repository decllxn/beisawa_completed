from django.urls import path
from .views import OfferListView, HomePageOfferListView

urlpatterns = [
    path('api/', OfferListView.as_view(), name='offer-list'),
    path('homeOffer/', HomePageOfferListView.as_view(), name='home-offer-list')
]