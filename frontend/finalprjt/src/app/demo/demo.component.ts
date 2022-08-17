// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   templateUrl: './demo.component.html',
//   styleUrls: ['./demo.component.css']
// })
// export class DemoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { demomodel } from './demo.model';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
  })
export class DemoComponent implements OnInit {
  UserValue!: FormGroup;
  UserObj: demomodel = new demomodel;
  allUser: any;
  btnSaveShow: boolean = true;
  btnUpdateShow: boolean = false;

  constructor(private formBuilder: FormBuilder, private api: ApiServiceService,
    private route: Router, private activatedRoute: ActivatedRoute) { }

  tasks: any = [];
  tasklist: any = [];

  ngOnInit(): void {}
  
    //  this.showTasks();

    //Form Validation
    // this.UserValue = this.formBuilder.group({

    //   't_name': new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z ]+$")]),
    //   't_id': new FormControl('', [Validators.required]),
    //   't_status': new FormControl('', [Validators.required]),
    //   'start_Time': new FormControl('', [Validators.required]),
    //   'end_Time': new FormControl('', [Validators.required]),
    //   'created_Date': new FormControl('', [Validators.required]),
    //   'approval_Status': new FormControl('', [Validators.required]),
    //   'assigned_Manager': new FormControl('', [Validators.required]),
    //   'task_Description': new FormControl('', [Validators.required]),
    // })
    // this.AllUser(); 
  
  
  // showTasks() {
  //   this.api.Task().subscribe((tasks) => {
  //     this.tasklist = tasks
  //     console.log(this.tasklist);
  //   });
  // }



//   // Deleting Tasks

  // DeleteUser(task_id: any) {
  //   this.api.deleteItems(task_id).subscribe(() => {
  //     this.showTasks();
  //   })
  // }


// //   //Adding New Tasks

  // AddUser() {

  //   this.UserObj.t_name = this.UserValue.value.t_name;
  //   this.UserObj.t_id = this.UserValue.value.t_id;
  //   this.UserObj.t_status = this.UserValue.value.t_status;
  //   this.UserObj.start_Time = this.UserValue.value.start_Time;
  //   this.UserObj.end_Time = this.UserValue.value.end_Time;
  //   this.UserObj.created_Date = this.UserValue.value.created_Date;
  //   this.UserObj.approval_Status = this.UserValue.value.approval_Status;
  //   this.UserObj.assigned_Manager = this.UserValue.value.assigned_Manager;
  //   this.UserObj.task_Description = this.UserValue.value.task_Description;


  //   this.api.AddItems(this.UserObj).subscribe({
  //     next: (v) => {
  //       console.log(v)
  //     }, error: (e) => {
  //       console.log(e)
  //       alert("error")
  //     },
  //     complete: () => {
  //       console.log('Employee record added!')
  //       alert("Employee record added!")
  //       this.UserValue.reset();

  //     }
  //   })
  // }


//   //Displaying All Tasks from database

  // AllUser() {
  //   this.api.getItem().subscribe(res => {
  //     this.AllUser = res;
  //   })
  // }

//   // Editing Task Fields

  // EditUser(user: any) {
  //   this.UserValue.controls["t_name"].setValue(user.t_name);
  //   this.UserValue.controls["t_id"].setValue(user.t_id);
  //   this.UserValue.controls["t_status"].setValue(user.t_status);
  //   this.UserValue.controls["start_Time"].setValue(user.start_Time);
  //   this.UserValue.controls["end_Time"].setValue(user.end_Time);
  //   this.UserValue.controls["created_Date"].setValue(user.created_Date);
  //   this.UserValue.controls["approval_Status"].setValue(user.approval_Status);
  //   this.UserValue.controls["assigned_Manager"].setValue(user.assigned_Manager);
  //   this.UserValue.controls["task_Description"].setValue(user.task_Description);
  //   this.UserObj.t_id = user.task_id;
  //   this.UpdateShowBtn();
  // }

//   //Updating Task Fields

  // UpdateUser() {
  //   this.UserObj.t_name = this.UserValue.value.t_name;
  //   this.UserObj.t_id = this.UserValue.value.t_id;
  //   this.UserObj.t_status = this.UserValue.value.t_status;
  //   this.UserObj.start_Time = this.UserValue.value.start_Time;
  //   this.UserObj.end_Time = this.UserValue.value.end_Time;
  //   this.UserObj.created_Date = this.UserValue.value.created_Date;
  //   this.UserObj.approval_Status = this.UserValue.value.approval_Status;
  //   this.UserObj.assigned_Manager = this.UserValue.value.assigned_Manager;
  //   this.UserObj.task_Description = this.UserValue.value.task_Description;
  //   this.api.UpdateItems(this.UserObj, this.UserObj.t_id).subscribe(res => {
  //     alert("Update Successful");
  //     this.UserValue.reset();
  //     this.AllUser();
  //   })

  // }

  // UpdateShowBtn() {
  //   this.btnUpdateShow = true;
  //   this.btnSaveShow = false;
  // }
  // SaveShowBtn() {
  //   this.btnUpdateShow = false;
  //   this.btnSaveShow = true;

  // }
}