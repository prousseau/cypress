import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Chanteur } from './chanteur.model';

@Injectable({ providedIn: 'root' })
export class ChanteurService {

  constructor(private httpClient: HttpClient) {}

  getChanteurs(): Observable<Chanteur[]> {
    return this.httpClient.get<Chanteur[]>(
      'http://localhost:3000/chanteurs',
    );
  };

  addFavourite(id: number): Observable<ArrayBuffer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(id);
    return this.httpClient.patch<ArrayBuffer>(
      `http://localhost:3000/chanteurs/${id}`,
      { id, aime: true },
      httpOptions
    );
  }

  removeFavourite(id: number): Observable<ArrayBuffer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.patch<ArrayBuffer>(
      `http://localhost:3000/chanteurs/${id}`,
      { id, aime: false},
      httpOptions
    );
  }
}
