import {enableProdMode, importProvidersFrom, LOCALE_ID} from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr-CA";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";

registerLocaleData(localeFr, 'fr-CA');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {

  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(APP_ROUTES)),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr-CA'
    },
    {provide: LOCALE_ID, useValue: 'fr-CA'},
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline'}
    }
  ],
}).catch(err => console.error(err));
