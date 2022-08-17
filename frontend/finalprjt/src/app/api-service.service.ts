import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs'
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

private apiRoot = 'http://127.0.0.1:8000/';
private url = 'http://127.0.0.1:8000/task/';

  
  constructor(private http: HttpClient) { }


    getItems(){   
      return this.http.get<any>(this.apiRoot.concat('task/')).pipe(
        map(
          (res =>{
            return res;
          })
        )
      )
    }
   


    postData(data:any){
      return this.http.post<any>(this.apiRoot.concat('task/'), data).pipe(
        map(
          (res =>{
            return res;
          })
        )
      )
    }

   

    //edit- seclected by id------------------------------


    getdatabyId(id:number){
      // return this.http.get<any>(this.apiRoot.concat('task/')+id)
      return this.http.get<any>('http://127.0.0.1:8000/task/' +id)
      // .pipe(
      //   map(
      //     (res =>{
      //       return res;
      //     })
      //   )
      // )
    }

    



delData(id:number){
  return this.http.delete<any>(this.apiRoot.concat('task/') + id).pipe(
    map(
      (res =>{
        return res;
      })
    )
  )
}



updatedata(id:number,body:any){

  return this.http.put<any>(this.apiRoot.concat('task/') +id,body);
}






// -------  delete and edit


public deleteusers(t_id: any) {
  return this.http.delete(this.apiRoot.concat('task/') +t_id);
}

  


public updateSer(t_id: any,data: any) {
  // return this.http.put(this.apiRoot.concat('task/') + t_id,data);

  return this.http.put(this.apiRoot + 'task/' + t_id+"/",data );
}


// ------ accept/reject lak


getTaskById(pk:number){
  return this.http.get(this.url + pk)
}

updateTaskById(pk:number,data:object) {
  return this.http.put(this.url + pk+"/", data)
}

}
















