import { Component, OnInit  } from '@angular/core';
import { StarWarsService } from './../../54_Services/star-wars.service';

@Component({
  selector: 'app-test-app-tabs',
  templateUrl: './test-app-tabs.component.html',
  styleUrls: ['./test-app-tabs.component.css']
})
export class TestAppTabsComponent implements OnInit {

  characters = [];
  chosenList = 'all'
  wsServise: StarWarsService;

  constructor(wsServise: StarWarsService) {
    this.wsServise = wsServise;
  }

  ngOnInit() { }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.wsServise.getCharacters(this.chosenList);
    return this.characters;
  }
}
