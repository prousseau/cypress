import { Routes } from '@angular/router';
import { ChanteursComponent } from './chanteurs/chanteurs.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
      path: 'chanteurs',
      loadComponent: () => import('./chanteurs/chanteurs.component').then(c => c.ChanteursComponent)
    },
    {
      path: 'infolettre',
      loadComponent: () => import('./infolettre/infolettre.component').then(c => c.InfolettreComponent)
    }
];
