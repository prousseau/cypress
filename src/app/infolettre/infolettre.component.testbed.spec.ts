import { InfolettreComponent } from './infolettre.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('Component Infolettre via le Testbed conventionnel', () => {
  let component: InfolettreComponent;
  let fixture: ComponentFixture<InfolettreComponent>;

  // Ce qui rend les tests compliqués - les pièges
  // 1- La configuration du TestingModule
  // 2- Interaction avec le DOM - on doit envoyer un événement pour que ça fonctionne
  // 3- Asynchronisme
  // 4- Gérer le change detection

  beforeEach(async () => { // gestion - Testing Module - Pourrait être plus compliqué si pas standalone - pour gérer les dépendances
    await TestBed.configureTestingModule({
      imports: [
        InfolettreComponent,
        HttpClientTestingModule, // truc officiel Angular
        NoopAnimationsModule,    // car y'a des animations associées à l'utilisation ici de Ng Material - Noop au lieu de BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfolettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`Usager fourni une adresse valide et soumet le formulaire`, () => {

    it(`Doit afficher un message de confirmation`, fakeAsync(() => { // fakeAsync avec tick pour gérer l'asynchronisme
      // Fetch les éléments du Dom - data-testid attr pour fin de tests seulement
      const input = fixture.debugElement.query(By.css('[data-testid=input-courriel]')).nativeElement as HTMLInputElement;
      const optinCheckBox = fixture.debugElement.query(By.css('[data-testid=input-optin] input[type="checkbox"]')).nativeElement as HTMLElement;
      const btnSoumettre = fixture.debugElement.query(By.css('[data-testid=btn-soumettre]')).nativeElement as HTMLButtonElement;
      const message = fixture.debugElement.query(By.css('[data-testid=message]')).nativeElement as HTMLParagraphElement;

      input.value = 'test@test.com';

      // gestion DOM Event car le Reactive Form - s'attend à un Dom Event pour savoir que la valeur a changée
      // on doit donc le faire manuellement
      input.dispatchEvent(new Event('input'));

      optinCheckBox.click();
      fixture.detectChanges(); // gestion change detection

      btnSoumettre.click();

      // capter la requête et retourner la réponse attendue
      // dans le testbed - c'est répondu de façon synchrone - donc mis un delay
      TestBed.inject(HttpTestingController)
        .expectOne((req) => !!req.url.match(/inscription/))
        .flush([true]);

      // On doit gérer l'Asynchronisme
      tick(500); // tick arbitraire de 500 ici - car simulation d'un delai dans le service
      fixture.detectChanges(); // forcer le rendu du HTML pour voir notre message

      // ASSERT
      expect(message.textContent).toContain('Merci!');
    }));
  });
});
