import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfolettreService } from '../shared/infolettre.service';

@Component({
  selector: 'app-infolettre',
  templateUrl: './infolettre.component.html',
  styleUrls: ['./infolettre.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ]
})
export class InfolettreComponent {
  message?: string;
  warning?: string;
  processing = false;

  formGroup: FormGroup = this.fb.group({
    courriel: [null, Validators.email],
    optin: [false, Validators.requiredTrue]
  });

  constructor(
    private service: InfolettreService,
    private fb: FormBuilder
  ) {}

  inscrire() {
    this.warning = '';
    this.message = '';

    if (this.formGroup.valid) {
      this.processing = true;
      this.service.inscrire(this.formGroup.value.courriel).subscribe((res) => {
        if (res.hasOwnProperty('info')) {
          this.warning = res.info;
        } else {
          this.message = 'Merci!';
        }
        this.processing = false;
      });
    } else {
      this.warning = 'Vous devez inscrire un courriel';
    }
  }
}
