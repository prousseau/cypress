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

it(`doit pouvoir se rendre à la section infolettre pour s'inscrire`, () => {
  cy.getByTestId('menu-item-infolettre').click();
  cy.getByTestId('input-courriel').type('test@test.com');
  cy.getByTestId('input-optin').find('label').click();
  cy.getByTestId('btn-soumettre').click();
  cy.getByTestId('message').should('include.text', 'Merci!');
});
