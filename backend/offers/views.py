from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Offer
from .serializers import OfferSerializer

class OfferPagination(PageNumberPagination):
    page_size = 10

class OfferListView(generics.ListAPIView):
    queryset = Offer.objects.all().order_by('-uploaded_at')
    serializer_class = OfferSerializer
    pagination_class = OfferPagination
