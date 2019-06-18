import { Component, OnInit } from '@angular/core';
import { Toevoegen } from '../domain/toevoegen';
import { ToevoegenService } from '../service/toevoegen.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent {
 name = new FormControl('');


}

