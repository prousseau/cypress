import { InfolettreComponent } from './infolettre.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { AsyncPipe, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

describe('Component Infolettre via le Testbed conventionnel', () => {
  let component: InfolettreComponent;
  let fixture: ComponentFixture<InfolettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InfolettreComponent,
        NoopAnimationsModule,
        AsyncPipe,
        NgIf,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
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

    fixture.debugElement
      .query(By.css('[data-testid=btn-soumettre]'))
      .nativeElement.click();

    const message = fixture.debugElement
      .query(By.css('[data-testid=resultat]'))
      .nativeElement as HTMLParagraphElement;

    expect(message.textContent).toBe('Merci!');

  }));
});
