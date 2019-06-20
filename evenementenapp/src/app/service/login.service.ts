import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gebruiker } from '../domain/gebruiker';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  actievegebruiker : Gebruiker;

  constructor(private http: HttpClient) { }

  loginUser(gebruikersnaam: string, wachtwoord: string ) : Observable<Gebruiker> {
    var gebruiker : Gebruiker = new Gebruiker();
    gebruiker.gebruikersnaam = gebruikersnaam;
    gebruiker.wachtwoord = wachtwoord;

    console.log(`http://localhost:8080/gebruiker/login`);
    console.log(gebruiker);

  return this.http.put<Gebruiker>(`http://localhost:8080/gebruiker/login`,
        gebruiker, this.httpOptions)

  }
}
