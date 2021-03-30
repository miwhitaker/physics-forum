from django.contrib import admin
from .models import Question


class ForumAdmin(admin.ModelAdmin):
    list_display = ('category', 'user', 'text', 'time', 'parent')

admin.site.register(Question, ForumAdmin)