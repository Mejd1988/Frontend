import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-gebruikerpagina',
  templateUrl: './gebruikerpagina.component.html',
  styleUrls: ['./gebruikerpagina.component.css']
})
export class GebruikerpaginaComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  ngOnInit() {
    
  }


}
