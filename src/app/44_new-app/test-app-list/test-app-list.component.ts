import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-app-list',
  templateUrl: './test-app-list.component.html',
  styleUrls: ['./test-app-list.component.css']
})
export class TestAppListComponent implements OnInit {

  @Input() characters;
  @Output() sideAssigned = new EventEmitter<{name:string, side:string}>();

  constructor() { }

  ngOnInit() {
  }

  onSideAssigned(charInfo){
    this.sideAssigned.emit(charInfo);
  }
}
