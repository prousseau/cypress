import { fakeAsync, TestBed } from '@angular/core/testing';
import { InfolettreComponent } from './infolettre.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { byLabel, byRole, byTestId, createComponentFactory } from '@ngneat/spectator/jest';

describe('Component Infolettre via Spectator', () => {
  const createComponent = createComponentFactory({
    component: InfolettreComponent,
    declareComponent: false,
    imports: [
      NoopAnimationsModule,
      InfolettreComponent,
      HttpClientTestingModule,
    ],
  });

  it('Doit inscrire un courriel', fakeAsync(() => {
    const spectator = createComponent();
    spectator.typeInElement('test@test.com', byTestId('input-courriel'));
    // spectator.click(byLabel(`J'autorise`));
    spectator.click(byRole(`checkbox`));
    spectator.click(byTestId('btn-soumettre'));

    TestBed.inject(HttpTestingController)
      .expectOne((req) => !!req.url.match(/inscription/))
      .flush([true]);

    spectator.tick();

    expect(spectator.query(byTestId('message'))).toHaveText('Merci!');
  }));
});
