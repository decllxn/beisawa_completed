from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('grappelli/', include('grappelli.urls')),
    path('api/accounts/', include('accounts.urls')),
    path('feedback/', include('feedback.urls')),
    path('blog/' ,include('blog.urls')),
    path("ckeditor5/", include('django_ckeditor_5.urls')),
    path('offers/', include('offers.urls')),
    path('locations/', include('locations.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
