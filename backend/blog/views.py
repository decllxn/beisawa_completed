from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination # Import pagination
from .models import Blogs, Category, Comment
from .serializers import BlogSerializer, CategorySerializer, CommentSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status


class BlogPagination(PageNumberPagination):
    page_size = 2  # Controls the number of blogs per page
    max_page_size = 100
    page_size_query_param = "page_size"

    def get_paginated_response(self, data):
        return Response({
            "count": self.page.paginator.count,  # Total filtered blogs count
            "total_pages": self.page.paginator.num_pages,  # Total pages based on filtered data
            "current_page": self.page.number,
            "results": data
        })

class BlogList(generics.ListAPIView):
    serializer_class = BlogSerializer
    pagination_class = BlogPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    
    search_fields = ["title", "content"]
    filterset_fields = ["category__id"]  # Ensure frontend sends category ID

    def get_queryset(self):
        queryset = Blogs.objects.filter(is_published=True).order_by("-date")

        # Get filters
        search_intent = self.request.GET.get("search_intent", "").strip()
        category = self.request.GET.get("category", "").strip()

        # Debugging
        print(f"Received search_intent: {search_intent}")
        print(f"Received category filter: {category}")

        # Apply search filter
        if search_intent:
            queryset = queryset.filter(
                Q(title__icontains=search_intent) | Q(content__icontains=search_intent)
            )

        return queryset.distinct()  # Category filtering is handled automatically

class LatestBlogView(APIView):
    def get(self, request, *args, **kwargs):
        latest_blog = Blogs.objects.filter(is_published=True).order_by('-date').first()

        if not latest_blog:
            return Response({"message": "No blog posts available."}, status=status.HTTP_404_NOT_FOUND)

        serializer = BlogSerializer(latest_blog, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class BlogDetail(generics.RetrieveAPIView):
    queryset = Blogs.objects.filter(is_published=True)
    serializer_class = BlogSerializer
    lookup_field = 'url'
    
class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer

class CommentListCreate(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        """Fetch only approved comments for a specific blog"""
        blog_url = self.kwargs['blog_url']
        blog = get_object_or_404(Blogs, url=blog_url)
        return Comment.objects.filter(blog=blog, is_approved=True)

    def perform_create(self, serializer):
        """Attach the comment to the correct blog"""
        blog_url = self.kwargs['blog_url']
        blog = get_object_or_404(Blogs, url=blog_url)
        serializer.save(blog=blog)