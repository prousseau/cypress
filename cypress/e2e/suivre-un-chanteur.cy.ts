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

it(`doit pouvoir sélectionner une carte et s'inscrire afin de suivre ce chanteur`, () => {
  cy.getByTestId('carte-chanteur').first().find('a').click({ force: true });
  cy.getByTestId('input-courriel').type('test@test.com');
  cy.getByTestId('btn-soumettre').click();
  // cy.getByTestId('resultat').should('have.text', 'Merci!');
});


