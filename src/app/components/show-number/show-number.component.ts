import { Component, OnInit, Input } from '@angular/core';
import { StateMex } from 'src/app/service/state-service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  value: number;

  constructor(private statemex: StateMex) { }

  ngOnInit() {
    this.statemex.registerListener(this.refresh);
    this.value = this.statemex.getState().value;
  }

  refresh = () => {
    this.value = this.statemex.getState().value;
  }

}
