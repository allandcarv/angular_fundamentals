import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button>Change Name</button>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
      <input
        type="text"
        [(ngModel)]="name">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;

  isHappy: boolean;
  name: string;
  numberOne: number;
  numberTwo: number;

  constructor() {
    this.title = 'Ultimate Angular';

    this.isHappy = false;

    this.name = 'Todd';

    this.numberOne = 1;
    this.numberTwo = 2;
  }

  handleChange(value: string) {
    this.name = value;
  }
}
