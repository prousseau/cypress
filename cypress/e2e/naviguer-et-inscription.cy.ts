before(() => {
  cy.visit('/');
});

it('doit se rendre sur la page des chanteurs', () => {
  cy.getByTestId('menu-item-chanteurs').click();
  cy.url().should('include', '/chanteurs');
});

it('doit y avoir 6 carte de chanteurs', () => {
  cy.getByTestId('carte-chanteur').should('have.length', 6);
});

it(`choisir la première carte et vérifier qu'elle est bien dans les favories`, () => {
  // cy.getByTestId('carte-chanteur').first().find('mat-icon').should('have.text', 'favorite');
  cy.premiereCarte().shoulBeFavourite(); // Abstraction avec Cypress Custom Commands
});

describe(`Usager se rend à la section infolettre pour s'inscrire`, () => {

  before(() => {
    cy.getByTestId('menu-item-infolettre').click();
  });

  describe(`À l'inscription, l'usager fourni une adresse valide et soumet le formulaire`, () => {
    const courriel = 'test@test.com';

    it(`Doit afficher un message de confirmation`, () => {
      cy.getByTestId('input-courriel').clear().type(courriel);
      cy.getByTestId('input-optin').find('label').click();
      cy.getByTestId('btn-soumettre').click();
      cy.getByTestId('message').should('include.text', 'Merci!');
      cy.getByTestId('warning').should('not.exist');
    });
  });

  describe(`À l'inscription, l'usager fourni une adresse existante et soumet le formulaire`, () => {
    const courriel = 'paul@piche.com';

    it(`Doit afficher un avis - courriel existe déjà dans la base de données`, () => {
      cy.getByTestId('input-courriel').clear().type(courriel);
      cy.getByTestId('btn-soumettre').click();
      cy.getByTestId('message').should('not.exist');
      cy.getByTestId('warning').should('include.text', 'Vous êtes déjà inscrit!');
    });
  });

});
