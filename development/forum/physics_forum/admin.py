from django.contrib import admin
from .models import Question
from .models import Answer


class ForumAdmin(admin.ModelAdmin):
    list_display = ('category', 'user', 'text', 'time', 'parent')

admin.site.register(Question, ForumAdmin)
admin.site.register(Answer, ForumAdmin)