from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from .models import Question, Answer
from django.http import JsonResponse
from django.utils import timezone
import json


def index(request):
    return render(request, 'index.html')

def qlist(request, cat):
    user_name = request.user.username
    if request.method == "POST":
        json_request = json.loads(request.body)
        time = timezone.now()
        new_question = Question.objects.create(
            category = cat,
            user = user_name,
            text = json_request['thing'],
            time = time,
        )
        new_question.save()

    questions = [q.to_dict() for q in Question.objects.filter(category = cat).order_by('time')]
    for k in questions:
        num = k['id']
        num_answers = Answer.objects.filter(parent = num).count()
        k['numAnswers'] = num_answers
 
    data = {
        'user': user_name,
        'questions': questions,
        'answers': [],
    }
    return JsonResponse(data)
 

def view_qn(request, qn):
    user_name = request.user.username
    if request.method == "POST":
        json_request = json.loads(request.body)
        time = timezone.now()
        new_answer = Answer.objects.create(
            category = json_request['cat'],
            user = user_name,
            text = json_request['thing'],
            time = time,
            parent = json_request['questionNumber'],
        )
        new_answer.save()
    questions = [l.to_dict() for l in Question.objects.filter(id = qn)]
    answers = [m.to_dict() for m in Answer.objects.filter(parent = qn).order_by('time')]
    data = {
        'user': user_name,
        'questions': questions,
        'answers': answers
    }
    return JsonResponse(data)