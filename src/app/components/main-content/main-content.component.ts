import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() value: number;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doChangeValue(number) {
    this.changeValue.emit(number);
  }

}
