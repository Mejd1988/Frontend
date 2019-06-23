import { Component, OnInit, Input } from '@angular/core';
import { Toevoegen } from '../domain/toevoegen';
import { ToevoegenService } from '../service/toevoegen.service';
import { FormControl, NgControl, Form } from '@angular/forms';
import { format } from 'url';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Button } from 'protractor';
import { Evenement } from '../domain/evenement';
import { LocatieService } from '../service/locatie.service';
import { Locatie } from '../domain/locatie';
import { Artiest } from '../domain/artiest';
import { ArtiestService } from '../service/artiest.service';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {

  @Input() FormData = { datum: '', naam: '', locatie: '' , artiest: ''}
  constructor(private toevoegenService: ToevoegenService,
    private locatieService: LocatieService,
    private artiestService: ArtiestService) {}
    

  evenement: Evenement;
  locatie: Locatie;
  artiest: Artiest;

  ngOnInit() {
  }

  submit(form: any) {
    // this.evenement = form.value;

    let artiest = new Artiest();
    artiest.naam = form.value.artiest;

    this.artiestService.create(artiest).subscribe(
      (data: any) => {
        this.artiest = data;
        let evenement = new Evenement();
        evenement.naam = form.value.naam;
        evenement.locatie = form.value.locatie;
        evenement.datum = form.value.datum;
        evenement.toelichting = form.value.toelichting;
        evenement.artiest = form.value.artiest;
      }
    )
    console.log(form.value);
    let locatie = new Locatie();
    locatie.naam = form.value.locatie;

    this.locatieService.create(locatie).subscribe(
      (data: any) => {
        this.locatie = data;
        let evenement = new Evenement();
        evenement.naam = form.value.naam;
        evenement.locatie = this.locatie;
        evenement.datum = form.value.datum;
        evenement.toelichting = form.value.toelichting;
        evenement.artiest = form.value.artiest;

        this.toevoegenService.create(evenement).subscribe(
          (data: Evenement) => {
            console.log("Toegevoegd")
            this.evenement = data;
          },
          (error: HttpErrorResponse) => {
            console.log("Oh nee, hè! Gaat het weer fout in evenement toevoegen!");
            console.log(error);
            console.log(error.message);

          },
          () => { console.log("Evenement is toegevoegd") })
     
      },
      (error: HttpErrorResponse) => {
        console.log("Oh nee, hè! Gaat het weer fout in locatie toevoegen!");
        console.log(error);
        console.log(error.message);

      },
      () => { console.log("Locatie is toegevoegd") }
     

    )

  }
}