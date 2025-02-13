from django.contrib import admin
from .models import CustomerFeedback, SupplierEngagement, CorporateOnboarding

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