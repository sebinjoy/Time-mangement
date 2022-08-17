import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-admin-task-list',
  templateUrl: './admin-task-list.component.html',
  styleUrls: ['./admin-task-list.component.css']
})
export class AdminTaskListComponent implements OnInit {

  
  

  constructor(private service:ApiServiceService) { }
  tasklist:any=[];
  selitem:any=[]
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
  


  onselect(item:String){
    this.isDisplay= !this.isDisplay;
    console.log(item) 
    this.selitem=item 
  }

 
}
