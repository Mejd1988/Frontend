import { Component, OnInit } from '@angular/core';
import { EvenementenAgenda } from '../domain/evenementen-agenda'
import { EvenementenAgendaService } from '../service/evenementen-agenda.service';

@Component({
  selector: 'app-evenementen-agenda',
  templateUrl: './evenementen-agenda.component.html',
  styleUrls: ['./evenementen-agenda.component.css']
})
export class EvenementenAgendaComponent implements OnInit {

      evenementenagenda: EvenementenAgenda[];
    
      constructor(private evenementenAgendaService: EvenementenAgendaService) { }
    
      ngOnInit() {
    
        this.evenementenAgendaService.findAll().subscribe(result => {
            this.evenementenagenda = result;
        });
        console.log(this.evenementenAgendaService);
      }
    
    }