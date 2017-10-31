import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-test-app-tabs',
  templateUrl: './test-app-tabs.component.html',
  styleUrls: ['./test-app-tabs.component.css']
})
export class TestAppTabsComponent implements OnInit {

  characters = [
    {name: 'Luke skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  chosenList = 'all'

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char)=>{
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((char)=>{
      return char.side === this.chosenList;
    })
  }
}
