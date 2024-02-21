from django.contrib import admin

# Register your models here.
from .models import Teacher

class TeacherAdmin(admin.ModelAdmin):
    list_display = ['name', 'age']
    search_fields = ['name']

admin.site.register(Teacher, TeacherAdmin)

