import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Chanteur } from '../shared/chanteur.model';

@Component({
  selector: 'app-chanteur-card',
  templateUrl: './chanteur-card.component.html',
  styleUrls: ['./chanteur-card.component.scss'],
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatButtonModule, MatIconModule ]
})
export class ChanteurCardComponent {
  @Input() chanteur?: Chanteur;
  @Output() addFavourite = new EventEmitter<number>();
  @Output() removeFavourite = new EventEmitter<number>();
}
