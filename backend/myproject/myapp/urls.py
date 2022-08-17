from   django.urls import path
from . import views

urlpatterns = [
    path('',views.taskView.as_view(), name='task')
] 