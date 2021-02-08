import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">Change Name</button>
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)">
      <div>{{ name }}</div>
      <div>
        {{ numberOne + numberTwo }}
      </div>
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

  handleClick() {
    this.name = 'John Doe';
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }
}
