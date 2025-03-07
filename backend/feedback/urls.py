from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CustomerFeedbackViewSet,
    SupplierEngagementViewSet,
    CorporateOnboardingViewSet,
    whatsappNumbersViewSet,
    csrf_token_view,
)

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'customer-feedback', CustomerFeedbackViewSet, basename="customer-feedback")
router.register(r'supplier-engagement', SupplierEngagementViewSet, basename="supplier-engagement")
router.register(r'corporate-onboarding', CorporateOnboardingViewSet, basename="corporate-onboarding")
router.register(r'whatsapp-numbers', whatsappNumbersViewSet, basename="whatsapp-numbers")

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('api/', include(router.urls)),
    path("csrf/", csrf_token_view, name="csrf_token"),
]

