from django.urls import path, include
from django.contrib.auth.models import User
from . import views
from rest_framework import routers, serializers, viewsets


#router = routers.DefaultRouter()
#router.register(r'users', UserViewSet)

urlpatterns = [
    path('', views.index, name = 'index'),
    path('api-auth/', include('rest_framework.urls'), name = 'rest_framework')
]
