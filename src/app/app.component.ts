import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gdg-craiova-redux';

  @Input() value: number = 10;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doChangeValue(number) {
    this.value = number;
  }

}
