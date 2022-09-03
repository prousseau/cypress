import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-infolettre',
  templateUrl: './infolettre.component.html',
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
  ],
})
export class InfolettreComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    courriel: [],
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  inscrire() {
  }
}
