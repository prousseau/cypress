import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChanteurService {
  constructor(private httpClient: HttpClient) {}

  getChanteurs() {
  };

  suivreChanteur(id: number): Observable<boolean> {
      return of(true);
  };
}
