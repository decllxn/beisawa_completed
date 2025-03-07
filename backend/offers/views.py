from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Offer, HomePageOffer
from .serializers import OfferSerializer, HomePageOfferSerializer

class OfferPagination(PageNumberPagination):
    page_size = 10

class OfferListView(generics.ListAPIView):
    queryset = Offer.objects.all().order_by('-uploaded_at')
    serializer_class = OfferSerializer
    pagination_class = OfferPagination


class HomePageOfferListView(generics.ListAPIView):
    queryset = HomePageOffer.objects.all().order_by('-uploaded_at')
    serializer_class = HomePageOfferSerializer