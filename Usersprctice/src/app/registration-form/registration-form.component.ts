import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styles: []
})
export class RegistrationFormComponent implements OnInit {

  constructor( private service : RegistrationServiceService,private router:Router) {
   }

  register(form:NgForm){

    this.service.postData(form).subscribe(resData=>{
      console.log(resData);
      this.router.navigate(['/home']);
    });
    // form.reset();
    
  }

  ngOnInit() {
  }
  
}
