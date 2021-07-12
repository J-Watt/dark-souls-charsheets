import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { HeaderComponent } from './header/header.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { CenterPaneComponent } from './center-pane/center-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { CompendiumComponent } from './compendium/compendium.component';
import { NgxAirtableModule } from 'ngx-airtable';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CharacterSearchComponent,
    HeaderComponent,
    LeftPaneComponent,
    CenterPaneComponent,
    RightPaneComponent,
    CompendiumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAirtableModule.forRoot({ apiKey: 'keyjNx12KH3lx4OQw' }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    //   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
