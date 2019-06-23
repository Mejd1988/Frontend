import { Injectable } from '@angular/core';
import { Artiest } from '../domain/artiest';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArtiestService {

  // private httpClient: HttpClient (door constructor)

  constructor(private httpClient: HttpClient) {

   }

  public findAll(): Observable<Artiest[]> {
    return this.httpClient.get<Artiest[]>("http://localhost:8080/artiest");
  }

  public create(artiest: Artiest): Observable<Artiest> {
    console.log("In create")
    return this
      .httpClient.post<Artiest>(
        "http://localhost:8080/artiest",
        artiest,
        httpOptions)
  }
}
