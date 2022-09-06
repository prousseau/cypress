import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, map, take, Subject, switchMap} from "rxjs";
import { ChanteurCardComponent } from '../chanteur-card/chanteur-card.component';
import { Chanteur } from '../shared/chanteur.model';
import { ChanteurService } from '../shared/chanteur.service';

@Component({
  selector: 'app-chanteurs',
  templateUrl: './chanteurs.component.html',
  styleUrls: ['./chanteurs.component.scss'],
  standalone: true,
  imports: [ CommonModule, ChanteurCardComponent ],
  providers: [ ChanteurService ]
})
export class ChanteursComponent implements OnInit, AfterViewInit  {
  chanteurs$?: Observable<Chanteur[]>;
  submitter$ = new Subject<void>();

  constructor(private service: ChanteurService) {
  }

  ngOnInit(): void {
    this.chanteurs$ = this.submitter$.pipe(
      switchMap(() => this.service.getChanteurs()),
      map((found) => (found ? found : []))
    );
  }

  ngAfterViewInit() {
    this.submitter$.next();
  }

  addFavourite(id: number) {
    this.service.addFavourite(id)
      .pipe(take(1))
      .subscribe(() => this.submitter$.next());
  }

  removeFavourite(id: number) {
    this.service.removeFavourite(id)
      .pipe(take(1))
      .subscribe(() => this.submitter$.next());
  }
}
