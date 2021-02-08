import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <input type="text" [value]="name">
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
}
