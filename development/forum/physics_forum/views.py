from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from .models import Question
#from serializers import UserSerializer, GroupSerializer

def index(request):
    return render(request, 'index.html')

def qlist(request):
    cat = int(request.GET.get('category'))
    print(cat)
    user_name = request.user.username
    questions = Question.objects.filter(cat).order_by('time')

    if request.method == "POST":
        body = request.body
        time = NOW()
        parent_id = 1
        new_question = Question.objects.create(
            category = cat,
            user = user_name,
            text = body,
            time = time,
            parent = parent_id,
        )
        new_question.save()

    context = {
        'user': user_name,
        'questions': questions,
    }
    return render(request, context, 'index.html')

