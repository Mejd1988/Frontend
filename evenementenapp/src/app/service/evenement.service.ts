import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../domain/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  // private httpClient: HttpClient (door constructor)

  constructor(private httpClient: HttpClient) {
   }

   public findAll(): Observable<Evenement[]> {
    return this.httpClient.get<Evenement[]>("http://localhost:8080/evenement");
  }  
  
  public findById(id: number): Observable<Evenement> {
    return this.httpClient.get<Evenement>(`http://localhost:8080/evenement/${id}`);
  }

  public retrieveAll(): Observable<Evenement[]> {
    return this.httpClient.get<Evenement[]>(`http://localhost:8080/evenement/getEvenement`);
  }
}