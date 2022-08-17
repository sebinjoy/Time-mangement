import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-dash-view',
  templateUrl: './user-dash-view.component.html',
  styleUrls: ['./user-dash-view.component.css']
})
export class UserDashViewComponent implements OnInit {



  UserValue = {
    't_id':"",
    't_name':"",
    't_status' :"",
    'start_Time' :"",
    'end_Time' :"",
    'created_Date' :"",
    'approval_Status' :"",
    'assigned_Manager' :"",
    'task_Description' :""
  }


  constructor(private service:ApiServiceService) { }
  searchText:any;
  tasklist:any=[];
  public databyid: any;
  isDisplay=true;




  ngOnInit(): void { 

    this.gettasklist()
  }
 gettasklist(){
    this.service.getItems().subscribe(res=>{
      this.tasklist=res
      console.log(res)  
    })

  }

  // ------------del & edit

  deleteuser(item: any) {
    this.service.deleteusers(item.t_id).subscribe(
      (resp) => {
        console.log(resp);
         this.gettasklist();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  
  edit(item: any){
    this.UserValue = item;
    this.isDisplay= !this.isDisplay;
    }
    

    updatetask(){
    this.service.updateSer(this.UserValue.t_id,this.UserValue).subscribe(
    (res) => {
    console.log(res);
    window.alert('data updated')
    this.gettasklist();
    },
    (err) => {
    console.log(err);
    }
    );
    }



} 

  
  





