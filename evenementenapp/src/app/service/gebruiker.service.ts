import { Injectable } from '@angular/core';
import { Gebruiker } from '../domain/gebruiker';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // private httpClient: HttpClient (door constructor)

  constructor(private httpClient: HttpClient) {
  }

 public findAll(): Observable<Gebruiker[]> {
   return this.httpClient.get<Gebruiker[]>("http://localhost:8080/gebruiker");
 }

 public create(gebruiker: Gebruiker): Observable<Gebruiker> {
  return this.httpClient.post<Gebruiker>(`http://localhost:8080/gebruiker/aanmakenGebruiker`,
      gebruiker, this.httpOptions)
}
}