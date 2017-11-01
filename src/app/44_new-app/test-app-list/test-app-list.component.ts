import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-app-list',
  templateUrl: './test-app-list.component.html',
  styleUrls: ['./test-app-list.component.css']
})
export class TestAppListComponent implements OnInit {

  @Input() characters;

  constructor() { }

  ngOnInit() {
  }

}
