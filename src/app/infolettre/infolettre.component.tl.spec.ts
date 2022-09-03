import { TestBed } from '@angular/core/testing';
import { InfolettreComponent } from './infolettre.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe(`InfolettreComponent via la "Testing Library"`, () => {
  it('Doit inscrire un courriel', async () => {
    await render('<app-infolettre></app-infolettre>', {
      imports: [
        NoopAnimationsModule,
        InfolettreComponent
      ],
    });
    const user = userEvent.setup();

    await user.type(screen.getByTestId('input-courriel'), 'test@test.com');
    await user.click(screen.getByTestId('btn-soumettre'));

    expect(await screen.findByTestId('resultat')).toHaveTextContent('Merci!');

  });
});
