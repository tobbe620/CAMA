from django.db import models

# Create your models here.
from django.db import models
class Teacher(models.Model):
    name = models.CharField(max_length=80)
    age = models.IntegerField()