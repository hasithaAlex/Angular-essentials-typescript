import { Component, OnInit, Input} from '@angular/core';
import { StarWarsService } from './../../54_Services/star-wars.service';

@Component({
  selector: 'app-test-app-item',
  templateUrl: './test-app-item.component.html',
  styleUrls: ['./test-app-item.component.css']
})
export class TestAppItemComponent implements OnInit {

  @Input() character;
  wsServise: StarWarsService;

  constructor(wsServise: StarWarsService) {
    this.wsServise = wsServise;
  }

  ngOnInit() {
  }

  onAssign(side) {
    this.wsServise.onSideChosen({name: this.character.name, side: side});
  }
}
