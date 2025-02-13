from django.contrib import admin
from . models import Blogs, Category, Comment

class BlogAdmin(admin.ModelAdmin):
    prepopulated_fields = {'url':('title', )}

class CommentAdmin(admin.ModelAdmin):
    list_display = ['message', 'name', 'is_approved']
    list_editable = ['is_approved']

admin.site.register(Blogs, BlogAdmin)
admin.site.register(Category)
admin.site.register(Comment, CommentAdmin)
