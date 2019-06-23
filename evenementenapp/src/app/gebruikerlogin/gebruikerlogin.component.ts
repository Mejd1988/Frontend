import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Gebruiker } from '../domain/gebruiker';

@Component({
  selector: 'app-gebruikerlogin',
  templateUrl: './gebruikerlogin.component.html',
  styleUrls: ['./gebruikerlogin.component.css']
})
export class GebruikerloginComponent implements OnInit {

  gebruiker : Gebruiker = new Gebruiker();

  constructor(private route: ActivatedRoute,
    public loginservice: LoginService,
    private router: Router) { }

    ngOnInit() {
    }

  foutmelding : String;

  versturen() {
    this.loginservice.loginUser(this.gebruiker.gebruikersnaam, this.gebruiker.wachtwoord).subscribe(
      (account: Gebruiker)  => { 
        this.loginservice.actievegebruiker = account; 
        console.log(account);
        this.loginservice.logged = true;
       },
      error => {console.log(error.message);
        this.foutmelding = "Het emailadres is niet bekend of het wacthwoord is verkeed."},
      () => this.router.navigate(['gebruiker/evenementen'] )
    )
  }

}
