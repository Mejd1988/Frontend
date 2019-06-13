import { Injectable } from '@angular/core';
import { EvenementenAgenda } from '../domain/evenementen-agenda';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementenAgendaService {

  // private httpClient: HttpClient (door constructor)

  constructor(private httpClient: HttpClient) {

   }

  public findAll(): Observable<EvenementenAgenda[]> {
    return this.httpClient.get<EvenementenAgenda[]>("http://localhost:8080/evenement");
  }
}