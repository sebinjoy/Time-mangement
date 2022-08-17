import imp
from django.shortcuts import render
from rest_framework import viewsets
from .models import task
from .serializers import tasksserializer








# Create your views here.


class taskView(viewsets.ModelViewSet):
    queryset= task.objects.all()
    serializer_class = tasksserializer




























