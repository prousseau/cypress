import { TestBed } from '@angular/core/testing';
import { InfolettreComponent } from './infolettre.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe(`InfolettreComponent via la "Testing Library"`, () => {
  describe(`Usager fourni une adresse valide et soumet le formulaire`, () => {

    it(`Doit afficher un message de confirmation`, async () => {

      // La façon de configurer
      await render('<app-infolettre></app-infolettre>', {
        imports: [
          NoopAnimationsModule,
          InfolettreComponent,
          HttpClientTestingModule,
        ],
      });

      const user = userEvent.setup();
      const input = screen.getByTestId('input-courriel');
      const checkbox = screen.getByRole(`checkbox`);
      const btnSoumettre = screen.getByTestId('btn-soumettre')

      // user.type - abstraction - s'occupe du dispatch de l'événement
      await user.type(input, 'test@test.com');

      await user.click(checkbox);

      await user.click(btnSoumettre);

      TestBed.inject(HttpTestingController)
        .expectOne((req) => !!req.url.match(/inscription/))
        .flush([true]);

      // findByTestId et autres commandes de la lib:
      // attendend que l'élément soit dans le dom lors du fetch avant de faire l'assertion
      // Aussi gestion de l'asynchronisme et du change detection
      expect(await screen.findByTestId('message')).toHaveTextContent('Merci!');
    });

  });
});
