import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(private service: RegistrationServiceService,private router:Router) {
    this.getUser();
   }
  register:any[]=[];

  getUser(){
    this.service.getData().subscribe(resData=>{
      this.register = resData;
    })
  }



  loginDetails(value){
    console.log(value);
    if(value.userid==='ybnuprksrdy@gmail.com' && value.password==='ybpr5678'){
    this.router.navigate(['/userOnlyCanUpdate']);      
    }
    // this.register.forEach(function(items){
    //   if(value.userid === items.email && value.password === items.password){
    //   console.log(items);
    //   this.getUser();

    //   }
    // });
  }

  route(){
    this.service.loginbool=true;
    // this.router.navigate(['/userOnlyCanUpdate']);

  }
  ngOnInit() {
  }
 
}
