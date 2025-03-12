from django.db import models
from cloudinary.models import CloudinaryField

class Offer(models.Model):
    image = CloudinaryField('image', folder="offers")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Offer {self.id}"


class HomePageOffer(models.Model):
    image = CloudinaryField('image', folder="homepage_offers")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"HomePageOffer {self.id}"

