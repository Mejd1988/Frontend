import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../service/gebruiker.service';
import { Gebruiker } from '../domain/gebruiker';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-gebruiker',
  templateUrl: './gebruiker.component.html',
  styleUrls: ['./gebruiker.component.css']
})
export class GebruikerComponent implements OnInit {

  constructor(private router : Router, private loginservice : LoginService
    ) { }

ngOnInit() {
  if(this.loginservice.actievegebruiker != null) {
    this.router.navigate(['gebruiker/gebruikerpagina']);
}
}

logout(){
  this.loginservice.logged = false;
  this.loginservice.actievegebruiker.gebruikersnaam ='';

}
}
