from rest_framework import serializers
from .models import Blogs, Category, Comment
from django.conf import settings

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    comment_count = serializers.SerializerMethodField()
    author = serializers.StringRelatedField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Blogs
        fields = ['title', 'author', 'content', 'date', 'image', 'url', 'category', 'is_published', 'comment_count']
    
    def get_comment_count(self, obj):
        return obj.comments.filter(is_approved=True).count()
    
    def get_image(self, obj):
        if obj.image:  # Ensure image exists
            return f"https://res.cloudinary.com/{settings.CLOUDINARY_STORAGE['CLOUD_NAME']}/{obj.image}"
        return None  # Return None if no image is uploaded

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'message', 'date']