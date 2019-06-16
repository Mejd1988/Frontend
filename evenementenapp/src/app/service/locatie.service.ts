import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locatie } from '../domain/locatie';

@Injectable({
  providedIn: 'root'
})
export class LocatieService {

  // private httpClient: HttpClient (door constructor)

  constructor(private httpClient: HttpClient) {

  }

 public findAll(): Observable<Locatie[]> {
   return this.httpClient.get<Locatie[]>("http://localhost:8080/locatie");
 }
}