from django.urls import path, include
from django.contrib.auth.models import User
from . import views
from rest_framework import routers
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', views.index, name = 'index'),
    path('api/<int:cat>', csrf_exempt(views.qlist), name = 'api'),
    path('question/<int:qn>', csrf_exempt(views.view_qn), name = 'question'),
    path('newquestion/', views.new_qn, name = 'newquestion'),
    path('newanswer/', views.new_an, name = 'newanswer'),
    path('api-auth/', include('rest_framework.urls'), name = 'rest'),
]