import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../service/gebruiker.service';
import { Gebruiker } from '../domain/gebruiker';


@Component({
  selector: 'app-gebruiker',
  templateUrl: './gebruiker.component.html',
  styleUrls: ['./gebruiker.component.css']
})
export class GebruikerComponent implements OnInit {

  gebruiker: Gebruiker[];
    
  constructor(private gebruikerService: GebruikerService) { }

  ngOnInit() {

    this.gebruikerService.findAll().subscribe(result => {
        this.gebruiker = result;
    });
    console.log(this.gebruikerService);
  }

}