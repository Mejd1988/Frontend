import { Component, OnInit } from '@angular/core';
import { Locatie } from '../domain/locatie';
import { LocatieService } from '../service/locatie.service';

@Component({
  selector: 'app-locatie',
  templateUrl: './locatie.component.html',
  styleUrls: ['./locatie.component.css']
})
export class LocatieComponent implements OnInit {

  locatie: Locatie[];
    
  constructor(private locatieService: LocatieService) { }

  ngOnInit() {

    this.locatieService.findAll().subscribe(result => {
        this.locatie = result;
    });
    console.log(this.locatieService);
  }

}