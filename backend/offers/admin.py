from django.contrib import admin
from .models import Offer, HomePageOffer

@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    list_display = ['id', 'uploaded_at']


@admin.register(HomePageOffer)
class HomePageOfferAdmin(admin.ModelAdmin):
    list_display = ['id', 'uploaded_at']