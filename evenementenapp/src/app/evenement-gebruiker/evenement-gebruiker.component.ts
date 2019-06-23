import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Gebruiker } from '../domain/gebruiker';
import { GebruikerService } from '../service/gebruiker.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evenement-gebruiker',
  templateUrl: './evenement-gebruiker.component.html',
  styleUrls: ['./evenement-gebruiker.component.css']
})
export class EvenementGebruikerComponent implements OnInit {

  gebruiker: Gebruiker;

  constructor(private gebruikerService: GebruikerService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.actievegebruiker==null){
      this.router.navigate['home'];
    }
    
    this.gebruikerService.findById(this.loginService.actievegebruiker.id).subscribe(
      result => {
        console.log(result);
        this.gebruiker = result;
        console.log(this.gebruiker.evenementenBezoeken);
    },
    fout => console.log(fout)
    
    );
    console.log(this.gebruikerService);
  }

}
