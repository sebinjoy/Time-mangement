import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { addModelstatus } from './task-addstatus.model';


@Component({
  selector: 'app-admin-task-details',
  templateUrl: './admin-task-details.component.html',
  styleUrls: ['./admin-task-details.component.css']
})
export class AdminTaskDetailsComponent implements OnInit {


  public searchTerm = '';
  public taskById:any;
  public taskByIdCopy:any;
  public updatedTask:any;
  public task:any;



  formValue ! : FormGroup <any>
  addObj:addModelstatus= new addModelstatus;

  constructor( private service:ApiServiceService, private formBuilder: FormBuilder) { }
  tasklist:any=[];
 
  ngOnInit(): void {
    this.gettasklist()


    this.formValue = this.formBuilder.group({
      t_status :['']
    })

  }


   
  gettasklist(){
    this.service.getItems().subscribe(res=>{
      this.tasklist=res
      console.log(res)  
    })
  }
  

action(pk:number) {
  console.log(pk)
  this.service.getTaskById(pk).subscribe((response)=>{
    this.taskById = response;
    console.log(this.taskById)
    this.taskByIdCopy = {...response};
  })
}

onSubmit() {

  this.service.updateTaskById(this.taskById.t_id, this.taskById).subscribe((response)=>{
    this.updatedTask = response;
    console.log(this.updatedTask)
    this.gettasklist()
    window.alert(" successfully updated status")
 })
  
}


}
