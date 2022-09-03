import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Chanteur } from '../shared/chanteur.model';

@Component({
  selector: 'app-chanteur-card',
  templateUrl: './chanteur-card.component.html',
  styleUrls: ['./chanteur-card.component.scss'],
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatButtonModule ]
})
export class ChanteurCardComponent {
  @Input() chanteur?: Chanteur;
}
