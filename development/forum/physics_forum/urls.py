from django.urls import path, include
from django.contrib.auth.models import User
from . import views
from rest_framework import routers


urlpatterns = [
    path('', views.index, name = 'index'),
    path(r'^api/$', views.qlist, name = 'qlist'),
    path('api/', views.qlist, name = 'api'),
    path('question/', views.qlist, name = 'question'),
    path('api-auth/', include('rest_framework.urls'), name = 'rest'),
]