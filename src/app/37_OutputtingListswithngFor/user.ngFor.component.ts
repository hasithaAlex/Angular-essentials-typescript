import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './user.ngFor.component.html',
})

export class ngForComponent{
  newItem = '';

  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();

  constructor(){}

  onAddItem(){
    this.itemAdded.emit(this.newItem);
  }
}
