from django.db import models
from django.utils import timezone
from django.core.validators import RegexValidator

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


class whatsappNumbers(models.Model):
    branch = models.CharField(max_length=100)
    phone_regex = RegexValidator(
        regex=r'^\+?254\d{9}$|^07\d{8}$',
        message="Phone number must be in the format +254XXXXXXXXX or 07XXXXXXXX."
    )

    phone_number = models.CharField(validators=[phone_regex], max_length=13, unique=True, default='0712345678')
    date = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        # Convert local format to international format
        if self.phone_number.startswith("07"):
            self.phone_number = "+254" + self.phone_number[1:]
        super().save(*args, **kwargs)


    def __str__(self):
        return self.branch
