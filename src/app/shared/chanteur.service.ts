import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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

  addFavourite(id: number): Observable<Chanteur> {
    return this.httpClient.patch<any>(
      `http://localhost:3000/chanteurs/${+id}`,
      { aime: true }
    ).pipe(
        map((res: any) => res.body)
    );
  }

  removeFavourite(id: number): Observable<Chanteur> {
    return this.httpClient.patch<any>(
      `http://localhost:3000/chanteurs/${+id}`,
      { aime: false }
    ).pipe(
      map((res: any) => res.body)
    );
  }
}
