import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private service: RegistrationServiceService) {
    this.getUser();
   }
  register:any[]=[];

  getUser(){
    this.service.getData().subscribe(resData=>{
      this.register = resData;
    })
   
  }

  ngOnInit() {
  }

}
