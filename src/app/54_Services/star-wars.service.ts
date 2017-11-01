import { LogService } from './../56_log/log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {

  private characters = [
    {name: 'Luke skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  private logService: LogService;
  //inject service in to a servce
  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char)=>{
      return char.side === chosenList;
    })
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char)=>{
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog("> Changed side of "+charInfo.name+" Change side to > "+charInfo.side);
  }

  addCharacter(name, side) {
    //====================================================
    //check already excets
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if(pos !== -1)
      return;
    //====================================================
    //add new char
    const newChar = { name: name, side: side};
    this.characters.push(newChar);
    //====================================================
  }
}
