import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-app-item',
  templateUrl: './test-app-item.component.html',
  styleUrls: ['./test-app-item.component.css']
})
export class TestAppItemComponent implements OnInit {

  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(side) {
    this.sideAssigned.emit({name: this.character.name, side: side})
  }
}
