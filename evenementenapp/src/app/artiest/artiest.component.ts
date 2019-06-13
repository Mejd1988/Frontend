import { Component, OnInit } from '@angular/core';
import { Artiest } from '../domain/artiest';
import { ArtiestService } from '../service/artiest.service';

@Component({
  selector: 'app-artiest',
  templateUrl: './artiest.component.html',
  styleUrls: ['./artiest.component.css']
})
export class ArtiestComponent implements OnInit {

  
    artiest: Artiest[];
  
    constructor(private artiestService: ArtiestService) { }
  
    ngOnInit() {
  
      this.artiestService.findAll().subscribe(result => {
          this.artiest = result;
      });
      console.log(this.artiestService);
    }
  
  }