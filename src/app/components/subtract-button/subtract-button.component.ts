import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateMex } from 'src/app/service/state-service';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  constructor(private statemex: StateMex) { }

  ngOnInit() {
  }

  subtract() {
    const value = this.statemex.getState().value - 1;
    this.statemex.setState({value});
  }

}
