import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{  detail | json }}
      <div>
        Passenger name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname">
      </div>

      <div>
        Passenger ID:
        <input type="number" name="id" [ngModel]="detail?.id">
      </div>

      <div>
        <label>
          <input type="radio" name="checkedIn" [ngModel]="detail?.checkedIn" [value]="true" (ngModelChange)="toggleCheckIn($event)">
          Yes
        </label>
        <label>
          <input type="radio" name="checkedIn" [ngModel]="detail?.checkedIn" [value]="false">
          No
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkedInDate" [ngModel]="detail?.checkedInDate">
      </div>
      {{ form.value | json}}
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }
}
