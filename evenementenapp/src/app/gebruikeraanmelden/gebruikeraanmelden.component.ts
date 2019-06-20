import { Component, OnInit } from '@angular/core';
import { Evenement } from '../domain/evenement';
import { Gebruiker } from '../domain/gebruiker';
import { GebruikerService } from '../service/gebruiker.service';
import { Router } from '@angular/router';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-gebruikeraanmelden',
  templateUrl: './gebruikeraanmelden.component.html',
  styleUrls: ['./gebruikeraanmelden.component.css']
})
export class GebruikeraanmeldenComponent implements OnInit {

  gebruiker : Gebruiker = new Gebruiker();
  
  wachtwoordcheck : String;
  wwerror : String;
  evenementen : Evenement[];

  constructor(private gebruikerService : GebruikerService,
    private evenementService : EvenementService,
    private router : Router) { }

  ngOnInit() {
    this.evenementService.retrieveAll().subscribe(evenement  => {
      this.evenementen = evenement;
  })}

  versturen() {

    if(this.wachtwoordcheck == this.gebruiker.wachtwoord) {
      //this.account.wachtwoord = shajs('sha256').update(this.account.wachtwoord).digest('hex');
    this.gebruikerService.create(this.gebruiker).subscribe(
        gebruiker  => { console.log(gebruiker) },
        error =>  {//this.wwerror = error.message,//console.log(error.message),
          if (error.message = "Http failure response for http://localhost:8080//account/createAccount: 409 OK") {
            this.wwerror = "Dit e-mail adres bestaat al in onze database."
        }//} else {
          //  this.router.navigate(['account'] )
          //}
        },
        () => this.router.navigate(['gebruiker'] )

    )
  }
    else {
      this.wwerror = "De wachtwoorden komen niet overeen."
    }
  }
}
