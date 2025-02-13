from django.urls import path
from . import views

urlpatterns = [
    path('api/blogs/', views.BlogList.as_view(), name='blog-list-api'),
    path('api/blogs/<slug:url>/', views.BlogDetail.as_view(), name='blog-detail-api'),
    path('api/categories/', views.CategoryList.as_view(), name='category-list-api'),
    path('api/latest-blog/', views.LatestBlogView.as_view(), name='latest-blog'),

    path('api/blogs/<slug:blog_url>/comments/', views.CommentListCreate.as_view(), name='comment-list-create-api'),   
]