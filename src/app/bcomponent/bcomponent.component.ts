import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bcomponent',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css']
})
export class BcomponentComponent implements OnInit {

  @Output() event = new EventEmitter();

  sendForm(data){
    this.event.emit(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
