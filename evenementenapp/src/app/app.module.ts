import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtiestComponent } from './artiest/artiest.component';
import { EvenementenAgendaComponent } from './evenementen-agenda/evenementen-agenda.component';

import { GebruikerComponent } from './gebruiker/gebruiker.component';

import { LocatieComponent } from './locatie/locatie.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { GebruikeraanmeldenComponent } from './gebruikeraanmelden/gebruikeraanmelden.component';
import { GebruikerloginComponent } from './gebruikerlogin/gebruikerlogin.component';
import { GebruikerpaginaComponent } from './gebruikerpagina/gebruikerpagina.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtiestComponent,
    EvenementenAgendaComponent,
    GebruikerComponent,
    LocatieComponent,
    EvenementComponent,
    ToevoegenComponent,
    EvenementDetailsComponent,
    GebruikeraanmeldenComponent,
    GebruikerloginComponent,
    GebruikerpaginaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
