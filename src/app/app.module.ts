import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './16_component/user.component';
import { UserEventComponent } from './18_event/user.event.component';
import { UserInputComponant } from './21_input/user.input.component';
import { UserEventOutputComponent } from './22_output/user.output.component';
import { TriedParty } from "./31_3rd_Party_Libraries/third.party.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEventComponent,
    UserInputComponant,
    UserEventOutputComponent,
    TriedParty
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
