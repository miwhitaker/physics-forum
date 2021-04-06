from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from .models import Question
from django.http import JsonResponse


def index(request):
    return render(request, 'index.html')

def qlist(request, cat):
    user_name = request.user.username
    questions = [q.to_dict() for q in Question.objects.filter(category = cat).order_by('time')]
    num_answers = []
    for k in questions:
        num = k['id']
        num_answers = Question.objects.filter(parent = num).count()
        k['numAnswers'] = num_answers
 
    print(questions)

#    if request.method == "POST":
#        body = request.body
#        time = NOW()
#        parent_id = 1
#        new_question = Question.objects.create(
#            category = cat,
#            user = user_name,
#            text = body,
#            time = time,
#            parent = parent_id,
#        )
#        new_question.save()

    data = {
        'user': user_name,
        'questions': questions,
        'answers': []
    }

    return JsonResponse(data)
 

def view_qn(request, qn):
    user_name = request.user.username
    questions = [l.to_dict() for l in Question.objects.filter(id = qn)]
    answers = [m.to_dict() for m in Question.objects.filter(parent = qn).order_by('time')]
    print(questions)
    print(answers)
    data = {
        'user': user_name,
        'questions': questions,
        'answers': answers
    }

    return JsonResponse(data)
