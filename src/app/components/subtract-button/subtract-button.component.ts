import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Statemax } from 'src/app/services/state-management-service';

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
    const value = this.statemax.getState().value - 1;
    this.statemax.setState({ value });
  }

}
