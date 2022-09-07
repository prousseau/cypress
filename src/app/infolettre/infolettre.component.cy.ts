import { InfolettreComponent } from './infolettre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe(`InfolettreComponent via la "Cypress Component Testing"`, () => {

  describe(`Usager fourni une adresse valide et soumet le formulaire`, () => {

    it(`Doit afficher un message de confirmation`, () => {
      cy.mount(InfolettreComponent, {
        imports: [
          InfolettreComponent,
          HttpClientModule,
          BrowserAnimationsModule
        ],
      });
      cy.getByTestId('input-courriel').type('test@test.com');
      cy.getByTestId('input-optin').find('label').click({force:true});
      cy.getByTestId('btn-soumettre').click();
      cy.getByTestId('message').should('include.text', 'Merci!');
    });
  });
});
