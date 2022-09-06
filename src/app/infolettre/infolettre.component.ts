import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InfolettreService } from '../shared/infolettre.service';

@Component({
  selector: 'app-infolettre',
  templateUrl: './infolettre.component.html',
  styleUrls: ['./infolettre.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class InfolettreComponent implements OnInit {
  message: string = '';
  formGroup: FormGroup = this.fb.group({
    courriel: [null, Validators.email],
    optin: [false, Validators.requiredTrue]
  });

  constructor(
    private service: InfolettreService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  inscrire() {
    if (this.formGroup.valid) {
      this.service.inscrire(this.formGroup.value.courriel).subscribe(() => (this.message = 'Merci!'));
    } else {
      this.message = 'Vous devez inscrire un courriel';
    }
  }
}
