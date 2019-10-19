import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styles: []
})
export class Header1Component implements OnInit {

  constructor(private service: RegistrationServiceService) { }

  usercheck(){
    return this.service.loginbool;
  }

  ngOnInit() {
  }

}
