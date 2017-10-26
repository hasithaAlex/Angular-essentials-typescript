import { Component } from '@angular/core';

@Component({
  selector: 'app-user-event',
  template: `
  1: event binding  <input type="text" (input)="onUserInput($event)"> <br>
  2: property binding <input type="text" (input)="onUserInput($event)" [value]="name"> <br>
  <p>3: string interpollation hello {{name}}</p> <br>
  4: two way binging <input type="text" [(ngModel)]="name" > need <i>FormsModule </i> for this`
})

export class UserEventComponent {
    name = 'Max';

    onUserInput(event) {
      this.name = event.target.value;
    }
}
