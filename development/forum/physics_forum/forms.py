from django import forms

class AddQuestion(forms.Form):
    datetime = forms.DateTimeField()
    text = forms.TextField()

    def clean(self):
        cleaned_data = self.cleaned_data
        time = cleaned_data.get('datetime')
        body = cleaned_data.get('text')
        info = {'time': time, 'body': body}
        return 