import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';
import { ArtiestComponent } from './artiest/artiest.component';

const routes: Routes = [
  {
    path: 'evenement',
    component: EvenementComponent
  },
  {
    path: 'artiest',
    component: ArtiestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
