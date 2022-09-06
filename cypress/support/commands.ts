/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {

    /**
     * @type Commande Cypress de type hybride (dual) - peut être appelée directement sur l'objet cy ou enchaînée avec d'autres commandes
     * @desc Récupère un ou plusieurs DOM Element à partir d'un attribut [data-testid]
     * @see [Cypress best practices - `Selecting Elements`](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements)
     * @param selector
     */
    getByTestId(selector: string): Chainable<JQuery<HTMLElement>>;

    /**
     * @type Commande Cypress de type Parent Chainable
     * @desc Sélectionne toutes les cartes de chanteurs
     */
    cartes(): Chainable<JQuery<HTMLElement>>;

    /**
     * @type Commande Cypress de type Parent Chainable
     * @desc Sélectionne la première carte de la liste
     */
    premiereCarte(): Chainable<JQuery<HTMLElement>>;

    /**
     * @type Commande Cypress de type Child non-Chainable
     * @desc Fait une assertion pour valider si le chanteur à la mention "aime"
     *
     * doit avoir un parent ` Carte Chanteur `
     * @example
     *    cy.premiereCarte().shoulBeFavourite()
     */
    shoulBeFavourite(): void;
  }
};

Cypress.Commands.add('getByTestId', { prevSubject: 'optional' }, (subject, selector: string) => {
  if (subject) {
    return cy.wrap(subject).find(`[data-testid="${selector}"]`);
  }
  return cy.get(`[data-testid="${selector}"]`);
});

Cypress.Commands.add('cartes', () => {
  return cy.getByTestId('carte-chanteur');
});

Cypress.Commands.add('premiereCarte', () => {
  return cy.cartes().first();
});

Cypress.Commands.add('shoulBeFavourite', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).find('mat-icon').should('have.text', 'favorite');
});
