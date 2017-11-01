import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './16_component/user.component';
import { UserEventComponent } from './18_event/user.event.component';
import { UserInputComponant } from './21_input/user.input.component';
import { UserEventOutputComponent } from './22_output/user.output.component';
import { TriedParty } from "./31_3rd_Party_Libraries/third.party.component";
import { ngForComponent } from './37_OutputtingListswithngFor/user.ngFor.component';
import { TestAppItemComponent } from './44_new-app/test-app-item/test-app-item.component';
import { TestAppListComponent } from './44_new-app/test-app-list/test-app-list.component';
import { TestAppTabsComponent } from './44_new-app/test-app-tabs/test-app-tabs.component';

import { StarWarsService } from './54_Services/star-wars.service';
import { LogService } from './56_log/log.service';
import { CreateCharacterComponent } from './63_Validation/create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEventComponent,
    UserInputComponant,
    UserEventOutputComponent,
    TriedParty,
    ngForComponent,

    TestAppTabsComponent,
    TestAppItemComponent,
    TestAppListComponent,
    CreateCharacterComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StarWarsService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
