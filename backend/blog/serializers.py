from rest_framework import serializers
from .models import Blogs, Category, Comment

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    comment_count = serializers.SerializerMethodField()
    author = serializers.StringRelatedField()

    class Meta:
        model = Blogs
        fields = ['title', 'author', 'content', 'date', 'image', 'url', 'category', 'is_published', 'comment_count']
    
    def get_comment_count(self, obj):
        return obj.comments.filter(is_approved=True).count()
    
    def get_image(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'message', 'date']