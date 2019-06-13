import { Injectable } from '@angular/core';
import { Gebruiker } from '../domain/gebruiker';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  // private httpClient: HttpClient (door constructor)

  constructor(private httpClient: HttpClient) {

  }

 public findAll(): Observable<Gebruiker[]> {
   return this.httpClient.get<Gebruiker[]>("http://localhost:8080/gebruiker");
 }
}