import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import { ChanteurCardComponent } from '../chanteur-card/chanteur-card.component';
import { chanteurs } from '../shared/data';

@Component({
  selector: 'app-chanteurs',
  templateUrl: './chanteurs.component.html',
  styleUrls: ['./chanteurs.component.scss'],
  standalone: true,
  imports: [ CommonModule, ChanteurCardComponent ]
})
export class ChanteursComponent  {
  chanteurs$ = of(chanteurs)
}
