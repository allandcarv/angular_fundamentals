import { Component, Input } from '@angular/core';

import { Baggage } from '../../models/baggage.interface';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{  detail | json }}
      <div>
        Passenger name:
        <input type="text" name="fullname" required [ngModel]="detail?.fullname" #fullname="ngModel">
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>

      <div>
        Passenger ID:
        <input type="number" name="id" required [ngModel]="detail?.id" #id="ngModel">
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger ID is required
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkedInDate" [ngModel]="detail?.checkedInDate">
      </div>

      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage"> {{ item.value }}</option>
        </select>
      </div>
      <div>{{ form.value | json}}</div>
      <div>Valid: {{ form.valid | json}}</div>
      <div>Invalid: {{ form.invalid | json}}</div>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-baggage',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and Hold Baggage'
    },
  ]

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }
}
