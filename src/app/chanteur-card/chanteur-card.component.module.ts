import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { chanteurCardComponent } from './chanteur-card.component';

@NgModule({
  declarations: [chanteurCardComponent],
  exports: [chanteurCardComponent],
  imports: [MatCardModule, CommonModule, RouterModule, MatButtonModule]
})
export class chanteurCardComponentModule {}
