import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  variablerootNameNumber: number;

  rootName = 'Maximilan';
  onRootNameChange(newName) {
    this.rootName = newName;
  }



  rootItems  = ['apple','orange','green apple']
  onItemWasAdded(newItem)
  {
    this.rootItems.push(newItem);
  }
}
