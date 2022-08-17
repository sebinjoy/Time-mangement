import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  searchText:any;
  tasklist:any=[];

  ngOnInit(): void {

  this.gettasklist()

  }
 
  gettasklist(){
    this.service.getItems().subscribe(res=>{
      this.tasklist=res
      console.log(res)  
    })
  }
  


// ondelete(pid:string){
//   this.service.deletetask(pid).subscribe(res=>{
//     console.log(res)
//   })}
  // window.alert("current employee details deleted")

  // ondelete(t_id: any) {
  //   this.service.deleteItems(t_id).subscribe(() => {
  //     this.gettasklist();
  //   })
  // }


//  correct code delete
  // ondel(data:any){
  //     this.service.delData(data.id).subscribe({next: (d) => {
  //       console.log(d)
  //     },
  //     error: (e) => {
  //       console.log(e)
  //       alert("error")
  //     },
  //     complete: () => {
  //       console.log("record deleted")
  //       alert("record deleted")
        
        
  //     }  
  //   })
  //   }
  

}
