import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})

export class UserDetailsComponent implements OnInit {

  userDetails={
    name:'',
    Dob:'',
    email:'',
    password:'',
    hq:'',
    id:''
  }


  constructor(private service: RegistrationServiceService,private router:Router) {
    this.getUser();
   }
  register:any[]=[];

  getUser(){
    this.service.getData().subscribe(resData=>{
      this.register = resData;
    })
   
  }
  deleteUser(user){
      this.service.deleteUser(user).subscribe(resData=>{
        console.log(resData);
        this.getUser();
      })
  }
  updateData(user){

    this.userDetails.name=user.name;
    this.userDetails.Dob=user.Dob;
    this.userDetails.email=user.email;
    this.userDetails.password=user.password;
    this.userDetails.hq=user.hq;
    this.userDetails.id=user.id;

    console.log(this.userDetails);

  }
  update(id,value:NgForm){

    this.service.updateUser(id,value).subscribe(data=>{
      // console.log(data);
      // this.getUser();
      this.router.navigate(['/home']);
    })
  }
  ngOnInit() {
  }

}
