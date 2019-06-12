import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementenArtiestComponent } from './evenementen-artiest/evenementen-artiest.component';
import { ArtiestComponent } from './artiest/artiest.component';
import { EvenementenAgendaComponent } from './evenementen-agenda/evenementen-agenda.component';
import { EvenementArtiestenComponent } from './evenement-artiesten/evenement-artiesten.component';
import { EvenementBezoekerComponent } from './evenement-bezoeker/evenement-bezoeker.component';
import { GebruikerComponent } from './gebruiker/gebruiker.component';
import { GebruikerEvenementenBezoekenComponent } from './gebruiker-evenementen-bezoeken/gebruiker-evenementen-bezoeken.component';
import { GebruikerVriendenComponent } from './gebruiker-vrienden/gebruiker-vrienden.component';
import { LocatieComponent } from './locatie/locatie.component';
import { EvenementComponent } from './evenement/evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementenArtiestComponent,
    ArtiestComponent,
    EvenementenAgendaComponent,
    EvenementArtiestenComponent,
    EvenementBezoekerComponent,
    GebruikerComponent,
    GebruikerEvenementenBezoekenComponent,
    GebruikerVriendenComponent,
    LocatieComponent,
    EvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
