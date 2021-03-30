from django.db import models
import json

class Question(models.Model):
    category = models.IntegerField()
    user = models.CharField(max_length = 50)
    text = models.TextField()
    time = models.DateTimeField()
    parent = models.IntegerField(null = True)

    def __str__(self):
        return json.dumps({
            'category': self.category,
            'user': self.user,
            'text': self.text,
            'time': self.time,
            'parent': self.parent,
        })