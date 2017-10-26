import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-output',
  template: ` property binding <input type="text" (input)="onUserInput($event)" [value]="name"> <br>`
})

export class UserEventOutputComponent {
  @Input() name;
  @Output() chaildNameChange = new EventEmitter<string>();

  onUserInput(event) {
    this.chaildNameChange.emit(event.target.value);
  }
}

