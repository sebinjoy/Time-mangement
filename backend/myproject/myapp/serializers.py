from rest_framework import serializers
from .models import task

class tasksserializer(serializers.ModelSerializer):
    class Meta:
        model = task
        fields = ['t_name', 't_id','t_status','start_Time','end_Time' ,'created_Date', 'approval_Status', 'assigned_Manager', 'task_Description']