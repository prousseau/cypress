import { HomeComponent } from './home.component';

it(`should test la page d'accueil`, () => {
  cy.mount(HomeComponent, { imports: [] });

  cy.get('h1').should('include.text', 'Component Testing Demo');
});
