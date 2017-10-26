import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  template: `
  {{name}}
  `
})
export class UserInputComponant {
    @Input() name = 'Max';
}
