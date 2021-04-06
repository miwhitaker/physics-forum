from django.urls import path, include
from django.contrib.auth.models import User
from . import views
from rest_framework import routers


urlpatterns = [
    path('', views.index, name = 'index'),
    path('api/<int:cat>', views.qlist, name = 'api'),
    path('question/<int:qn>', views.view_qn, name = 'question'),
    path('api-auth/', include('rest_framework.urls'), name = 'rest'),
]