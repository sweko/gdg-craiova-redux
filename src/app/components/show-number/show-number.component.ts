import { Component, OnInit, Input } from '@angular/core';
import { Statemax } from 'src/app/services/state-management-service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  value: number;

  constructor(private statemax: Statemax) { }

  ngOnInit() {
    this.value = this.statemax.state.value;
  }

  refresh() {
    this.value = this.statemax.state.value;
  }

}
