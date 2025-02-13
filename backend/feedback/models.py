from django.db import models
from django.utils import timezone

class CustomerFeedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    feedback = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

class SupplierEngagement(models.Model):
    company_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    details = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.company_name

class CorporateOnboarding(models.Model):
    company_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_person = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=17)
    onboarding_details = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.company_name