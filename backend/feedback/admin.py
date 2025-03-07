from django.contrib import admin
from .models import CustomerFeedback, SupplierEngagement, CorporateOnboarding, whatsappNumbers
@admin.register(CustomerFeedback)
class CustomerFeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'date')
    search_fields = ('name', 'email', 'feedback')
    list_filter = ('date',)

@admin.register(SupplierEngagement)
class SupplierEngagementAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'email', 'date')
    search_fields = ('company_name', 'email', 'details')
    list_filter = ('date',)

@admin.register(CorporateOnboarding)
class CorporateOnboardingAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'email', 'contact_person', 'phone_number', 'date')
    search_fields = ('company_name', 'email', 'contact_person', 'phone_number', 'onboarding_details')
    list_filter = ('date',)

@admin.register(whatsappNumbers)
class whatsappNumbersAdmin(admin.ModelAdmin):
    list_display = ('branch', 'phone_number')
    search_fields = ('branch',)
    list_filter = ('date',)

