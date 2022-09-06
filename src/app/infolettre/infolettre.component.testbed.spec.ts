import { InfolettreComponent } from './infolettre.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { InfolettreService } from '../shared/infolettre.service';

describe('Component Infolettre via le Testbed conventionnel', () => {
  let component: InfolettreComponent;
  let fixture: ComponentFixture<InfolettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InfolettreComponent,
        NoopAnimationsModule,
        HttpClientTestingModule,
        AsyncPipe,
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
      ],
      providers: [
        InfolettreService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfolettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should', fakeAsync(() => {

    const input = fixture.debugElement
      .query(By.css('[data-testid=input-courriel]'))
      .nativeElement as HTMLInputElement;

    input.value = 'test@test.com';
    input.dispatchEvent(new Event('input'));

    const optinLabel = fixture.debugElement
      .query(By.css('[data-testid=input-optin] input[type="checkbox"]'))
      .nativeElement as HTMLElement;
    optinLabel.click();
    fixture.detectChanges();

    const btnSoumettre = fixture.debugElement
      .query(By.css('[data-testid=btn-soumettre]'))
      .nativeElement as HTMLButtonElement;
    btnSoumettre.click();

    TestBed.inject(HttpTestingController)
      .expectOne((req) => !!req.url.match(/inscription/))
      .flush([true]);
    tick();
    fixture.detectChanges();

    const message = fixture.debugElement.query(
      By.css('[data-testid=message]')
    ).nativeElement as HTMLParagraphElement;

    expect(message.textContent).toContain('Merci!');
  }));
});
