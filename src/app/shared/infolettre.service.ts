import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class InfolettreService {

  constructor(private httpClient: HttpClient) {}

  inscrire(courriel: string): Observable<boolean> {
    return this.httpClient.post<boolean>(
      'http://localhost:3000/inscription',
      { courriel }
    );
  }
}
