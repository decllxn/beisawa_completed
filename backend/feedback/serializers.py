from rest_framework import serializers
from .models import CorporateOnboarding, SupplierEngagement, CustomerFeedback

class CustomerFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerFeedback
        fields = ["name", "email", "feedback"]

class SupplierEngagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupplierEngagement
        fields = ["company_name", "email", "details"]

class CorporateOnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateOnboarding
        fields = ["company_name", "email", "contact_person", "phone_number", "onboarding_details"]