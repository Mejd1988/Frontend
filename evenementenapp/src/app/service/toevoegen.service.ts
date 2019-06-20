import { Injectable } from '@angular/core';
import { Toevoegen } from '../domain/toevoegen';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../domain/evenement';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ToevoegenService {
  evenementAanmaak : string = "http://localhost:8080/evenement";
  
  constructor(private http: HttpClient) {}

  public getEvenement(): Observable<Evenement[]> {
    return this.http.get <Evenement[]> (this.evenementAanmaak);
  }


  public create(evenement: Evenement): Observable<Evenement>{
    console.log("In create")
    return this
      .http.post<Evenement>(
        `${this.evenementAanmaak}/`, 
        evenement, 
        httpOptions)
  }

  // public update(pakketje: Pakketje): Observable<Pakketje>{
  //   return this
  //     .http.put<Pakketje>(
  //       `${this.dronebase}/${pakketje.id}`, 
  //       pakketje, 
  //       httpOptions)
  // }

  // public delete(id: number) : Observable<void> {
  //   return this
  //     .http
  //     .delete<void>(
  //       `${this.dronebase}/${id}`
  //     ) 
  // }

}