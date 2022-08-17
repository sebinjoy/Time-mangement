import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

import {FormBuilder,FormGroup} from '@angular/forms';
import { addModel } from './task-add.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  formValue ! : FormGroup <any>
  addObj:addModel= new addModel;

  constructor(private service:ApiServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      t_name :[''],
      t_id :[''],
      t_status :[''],
      start_Time :[''],
      end_Time:[''],
      created_Date:[''],
      approval_Status :[''],
      assigned_Manager:[''],
      task_Description :[''],


    })
   }
   add(){
    this.addObj.t_name = this.formValue.value.t_name;
    this.addObj.t_id = this.formValue.value.t_id;
    this.addObj.t_status = this.formValue.value.t_status;
    this.addObj.start_Time  = this.formValue.value.start_Time ;
    this.addObj.end_Time  = this.formValue.value.end_Time ;
    this.addObj.created_Date = this.formValue.value.created_Date ;
    this.addObj.approval_Status = this.formValue.value.approval_Status ;
    this.addObj.assigned_Manager  = this.formValue.value.assigned_Manager;
    this.addObj.task_Description  = this.formValue.value.task_Description;


    this.service.postData(this.addObj).subscribe({next: (p) => {
      console.log(p)
    },
    error: (e) => { 
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record added")
      alert("record added")
      this.formValue.reset();
    
      
    }
  })


  }

  }
