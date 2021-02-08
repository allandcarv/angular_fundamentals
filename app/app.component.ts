import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">Change Name</button>
      <input type="text" #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {

  name: string;

  handleClick(value: string) {
    this.name = value;
  }
}
