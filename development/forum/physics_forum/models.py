from django.db import models


class Question(models.Model):
    category = models.IntegerField()
    user = models.CharField(max_length = 50)
    text = models.TextField()
    time = models.DateTimeField()
    parent = models.IntegerField(null = True, blank = True)

    def to_dict(self):
        return {
            'category': self.category,
            'user': self.user,
            'text': self.text,
            'time': self.time.isoformat(),
            'parent': self.parent,
            'id': self.id,
        }

class Answer(models.Model):
    category = models.IntegerField()
    user = models.CharField(max_length = 50)
    text = models.TextField()
    time = models.DateTimeField()
    parent = models.IntegerField(null = True, blank = True)

    def to_dict(self):
        return {
            'category': self.category,
            'user': self.user,
            'text': self.text,
            'time': self.time.isoformat(),
            'parent': self.parent,
            'id': self.id,
        }