import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';
import { ArtiestComponent } from './artiest/artiest.component';
import { EvenementenAgendaComponent } from './evenementen-agenda/evenementen-agenda.component';
import { GebruikerComponent } from './gebruiker/gebruiker.component';
import { LocatieComponent } from './locatie/locatie.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { GebruikeraanmeldenComponent } from './gebruikeraanmelden/gebruikeraanmelden.component';
import { GebruikerpaginaComponent } from './gebruikerpagina/gebruikerpagina.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'evenement',
    component: EvenementComponent
  },
  { path: "gebruiker/nieuwegebruiker", component: GebruikeraanmeldenComponent },
  { path: "gebruiker/gebruikerpagina", component: GebruikerpaginaComponent },
  { path: 'home', component: MenuComponent },
  { 
    path: 'evenement/:evenementId',
    component: EvenementDetailsComponent 
  },
  {
    path: 'artiest',
    component: ArtiestComponent
  },
  {
    path: 'agenda',
    component: EvenementenAgendaComponent
  },
  {
    path: 'gebruiker',
    component: GebruikerComponent
  },
  {
    path: 'locatie',
    component: LocatieComponent
  },
  {
    path: 'toevoegen',
    component: ToevoegenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
