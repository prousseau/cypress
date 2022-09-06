import { InfolettreComponent } from './infolettre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

it(`doit tester le composant d'inscription à l'infolettre`, () => {
  cy.mount(InfolettreComponent, {
    imports: [InfolettreComponent, HttpClientModule, BrowserAnimationsModule],
  });
  cy.getByTestId('input-courriel').type('test@test.com');
  cy.getByTestId('btn-soumettre').click();
  cy.getByTestId('message').should('have.text', 'Merci!');
});
