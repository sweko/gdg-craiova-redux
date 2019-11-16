import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Statemax } from 'src/app/services/state-management-service';
import { ActionType } from 'src/app/services/actions';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  value: number;
  
  constructor(private statemax: Statemax) { }

  ngOnInit() {
  }

  subtract() {
    this.statemax.doSomething(ActionType.DecrementValue);
  }

}
