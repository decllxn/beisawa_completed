from django.contrib import admin
from . models import Blogs, Category, Comment

class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1
    fields = ['name', 'message', 'is_approved']

def approve_comments(modeladmin, request, queryset):
    queryset.update(is_approved=True)
    approve_comments.short_description = "Approve selected comments"

class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'date']
    search_fields = ['title', 'content']
    list_filter = ['category', 'date']
    prepopulated_fields = {'url': ('title',)}
    inlines = [CommentInline]

class CommentAdmin(admin.ModelAdmin):
    list_display = ['message', 'name', 'is_approved', 'date']
    search_fields = ['name', 'message']
    list_editable = ['is_approved']
    list_filter = ['is_approved', 'date']
    actions = [approve_comments]


admin.site.register(Blogs, BlogAdmin)
admin.site.register(Category)
admin.site.register(Comment, CommentAdmin)
