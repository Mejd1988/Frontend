import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locatie } from '../domain/locatie';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


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

  public create(locatie: Locatie): Observable<Locatie> {
    console.log("In create")
    return this
      .httpClient.post<Locatie>(
        "http://localhost:8080/locatie",
        locatie,
        httpOptions)
  }
}