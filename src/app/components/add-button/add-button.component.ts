import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Statemax } from 'src/app/services/state-management-service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor(private statemax: Statemax) { }

  ngOnInit() {
  }

  add() {
    const value = this.statemax.getState().value + 1;
    this.statemax.setState({ value });
  }

}
