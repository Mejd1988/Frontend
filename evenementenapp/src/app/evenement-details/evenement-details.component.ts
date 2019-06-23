import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from '../service/evenement.service';
import { Evenement } from '../domain/evenement';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {

  evenement: Evenement;

  constructor(private route: ActivatedRoute, private evenementService: EvenementService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data: any) => this.getEvenementDetails(data.evenementId),
      (error: any) => console.log(error),
      () => console.log("Gereed")
    )
    console.log(this.evenement);
  }
  
  getEvenementDetails(evenementId: number): void {
    console.log(evenementId);
    this.evenementService.findById(evenementId).subscribe(
      (data: Evenement) => this.evenement = data,
      (error: any) => console.log(error),
      () => console.log("Gereed")
    )
  }
}

