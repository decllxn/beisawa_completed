from django.contrib import admin
from django.utils.html import format_html

admin.site.site_header = "Beisawa Admin Panel"
admin.site.site_title = "Beisawa Administration"
admin.site.index_title = "Welcome to Beisawa Dashboard"

class CustomAdminSite(admin.AdminSite):
    def each_context(self, request):
        context = super().each_context(request)
        context["site_header"] = format_html(
            '<img src="/static/admin/logo.png" style="height:50px;">'
        )
        context["custom_css"] = "/static/admin/custom.css"
        return context

admin.site = CustomAdminSite()