from rest_framework import viewsets
from .models import CustomerFeedback, SupplierEngagement, CorporateOnboarding, whatsappNumbers
from .serializers import (
    CustomerFeedbackSerializer,
    SupplierEngagementSerializer,
    CorporateOnboardingSerializer,
    whatsappNumbersSerializer,
)
from django.http import JsonResponse
from django.middleware.csrf import get_token

class CustomerFeedbackViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows customer feedback to be viewed or edited.
    """
    queryset = CustomerFeedback.objects.all().order_by('-date')
    serializer_class = CustomerFeedbackSerializer

class SupplierEngagementViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows supplier engagement details to be viewed or edited.
    """
    queryset = SupplierEngagement.objects.all().order_by('-date')
    serializer_class = SupplierEngagementSerializer

class CorporateOnboardingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows corporate onboarding details to be viewed or edited.
    """
    queryset = CorporateOnboarding.objects.all().order_by('-date')
    serializer_class = CorporateOnboardingSerializer

class whatsappNumbersViewSet(viewsets.ModelViewSet):
    queryset = whatsappNumbers.objects.all().order_by('-date')
    serializer_class = whatsappNumbersSerializer

def csrf_token_view(request):
    return JsonResponse({"csrfToken": get_token(request)})