import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title + '!'}}
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    </div>
  `
})
export class AppComponent {
  title: string;

  isHappy: boolean;
  numberOne: number;
  numberTwo: number;

  constructor() {
    this.title = 'Ultimate Angular';

    this.isHappy = false;

    this.numberOne = 1;
    this.numberTwo = 2;
  }
}
