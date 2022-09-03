import { InfolettreComponent } from './infolettre.component';
import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  template: `<app-inscription></app-inscription>`
})
class WrapperComponent {}

it(`doit tester le composant d'inscription`, () => {
  cy.mount(WrapperComponent, {
    declarations: [WrapperComponent],
    imports: [InfolettreComponent, HttpClientModule, BrowserAnimationsModule],
  });

  cy.intercept(/nominatim/, { body: [] });
  cy.getByTestId('input-courriel').type('test@test.com');
  cy.getByTestId('btn-soumettre').click();
  cy.getByTestId('bloc-resultat').should('have.text', 'Merci!');
});
