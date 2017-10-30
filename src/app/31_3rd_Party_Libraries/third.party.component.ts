import { Component } from '@angular/core';
// ========================================
import 'lodash';
declare var _: any;
// ========================================

import { random } from 'lodash';

@Component({
  selector: 'app-tried-party',
  template: `
    <label> {{number}} </label>
    <button class="btn btn-success" (click)="onIncrease()"> Submit </button>
    <label> {{random}} </label>
    <button class="btn btn-success" (click)="on1Random()"> 1st way random Lodash </button>
    <button class="btn btn-success" (click)="on2Random()"> 2ed way random Lodash </button>
  `
})

export class TriedParty{

  number = 1;
  onIncrease() {
    this.number = this.number * 2;
  }

  random = 1;
  on1Random() {
    this.random = _.random(1,100);
  }
  on2Random() {
    this.random = random(0,-10);
  }
}
