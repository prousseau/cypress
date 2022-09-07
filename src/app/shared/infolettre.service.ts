import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class InfolettreService {

  constructor(private httpClient: HttpClient) {}

  inscrire(courriel: string): Observable<any> {

    if (courriel === 'paul@piche.com') {
      return of({ info: 'Vous êtes déjà inscrit!' }).pipe(delay(500));
    }

    return this.httpClient.post<any>(
      'http://localhost:3000/inscription',
      { courriel }
    ).pipe(delay(500));
  }
}
