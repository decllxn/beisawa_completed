from django.db import models

class Offer(models.Model):
    image = models.ImageField(upload_to='offers/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Offer {self.id}"


class HomePageOffer(models.Model):
    image = models.ImageField(upload_to='homepage_offers/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"HomePageOffer {self.id}"

