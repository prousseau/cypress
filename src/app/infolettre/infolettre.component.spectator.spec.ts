import { fakeAsync, TestBed } from '@angular/core/testing';
import { InfolettreComponent } from './infolettre.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { byTestId, createComponentFactory } from '@ngneat/spectator/jest';

describe('Component Infolettre via Spectator', () => {
  const createComponent = createComponentFactory({
    component: InfolettreComponent,
    declareComponent: false,
    imports: [
      NoopAnimationsModule,
      InfolettreComponent
    ],
  });

  it('Doit inscrire un courriel', fakeAsync(() => {
    const spectator = createComponent();
    spectator.typeInElement('test@test.com', byTestId('input-courriel'));
    spectator.click(byTestId('btn-soumettre'));

    expect(spectator.query(byTestId('resultat'))).toHaveText('Merci!');
  }));
});
