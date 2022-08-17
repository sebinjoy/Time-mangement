from django.db import models

# Create your models here.

class task(models.Model): 
    t_name = models.CharField(max_length=250,null=True, blank=True)
    t_id = models.IntegerField(primary_key=True)
    t_status = models.CharField(max_length=250,null=True, blank=True)
    start_Time = models.TimeField( null=True, blank=True)
    end_Time = models.TimeField( null=True, blank=True)
    created_Date = models.DateField(null=True, blank=True)
    approval_Status = models.CharField(max_length=100,null=True, blank=True)
    assigned_Manager = models.CharField(max_length=300,null=True, blank=True) 
    task_Description = models.CharField(max_length=300,null=True, blank=True)

    def __str__(self) -> str:
        return self.t_name