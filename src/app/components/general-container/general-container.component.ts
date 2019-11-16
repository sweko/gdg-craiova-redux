import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'general-container',
  templateUrl: './general-container.component.html',
  styleUrls: ['./general-container.component.css']
})
export class GeneralContainerComponent implements OnInit {

  @Input() actualValue: number;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doChangeValue(number) {
    this.changeValue.emit(number);
  }

  

}
