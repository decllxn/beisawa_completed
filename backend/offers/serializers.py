from rest_framework import serializers
from .models import Offer, HomePageOffer

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'

class HomePageOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'
