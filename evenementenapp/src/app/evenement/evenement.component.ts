import { Component, OnInit } from '@angular/core';
import { Evenement } from '../domain/evenement';
import { EvenementService } from '../service/evenement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  evenement: Evenement[];

  constructor(private evenementService: EvenementService, private router : Router) { }

  ngOnInit() {

    this.evenementService.findAll().subscribe(result => {
        this.evenement = result;
    });
    console.log(this.evenementService);
  }

  details(id: number) {
    this.router.navigate(['evenement', id]);
  }
}

