import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateMex } from 'src/app/service/state-service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor(private statemex: StateMex) { }

  ngOnInit() {
  }

  add() {
    const value = this.statemex.getState().value + 1;
    this.statemex.setState({value});
  }

}
