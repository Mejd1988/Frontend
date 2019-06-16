import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';
import { ArtiestComponent } from './artiest/artiest.component';
import { EvenementenAgendaComponent } from './evenementen-agenda/evenementen-agenda.component';
import { GebruikerComponent } from './gebruiker/gebruiker.component';
import { LocatieComponent } from './locatie/locatie.component';

const routes: Routes = [
  {
    path: 'evenement',
    component: EvenementComponent
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
