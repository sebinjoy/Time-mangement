import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
dta:any
isDisplay=true;

constructor(private router:Router) { }
  

ngOnInit(): void { }

onsubmit(item:any){
  console.log(item)
  if(item.name=="admin" && item.password=='admin'){
    // this.dta=console.log('sucss')
    console.log(this.router);
    this.router.navigate(['home']);
  }
  else if(item.name=="user" && item.password=='user'){
      console.log(this.router);
      this.router.navigate(['userdash']);
    }
  else{
    window.alert("username or password does not match")
  }
}
}

// if(this.dta) {
    //   console.log(this.router);
    //   this.router.navigate(['home']);
    // } else {
    //   console.log("Login failed, display error to user");
    // }