import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { chanteurCardComponentModule } from '../chanteur-card/chanteur-card.component.module';
import { chanteursComponent } from './chanteurs.component';

@NgModule({
  declarations: [chanteursComponent],
  exports: [chanteursComponent],
  imports: [CommonModule, chanteurCardComponentModule]
})
export class chanteursComponentModule {}
