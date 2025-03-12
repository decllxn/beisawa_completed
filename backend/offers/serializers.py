from rest_framework import serializers
from .models import Offer, HomePageOffer

class OfferSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        return obj.image.url 

    class Meta:
        model = Offer
        fields = '__all__'

class HomePageOfferSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        return obj.image.url  # Returns full Cloudinary URL

    class Meta:
        model = Offer
        fields = '__all__'
