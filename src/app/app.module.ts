import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ConfirmPasswordDirective } from './directives/confirm-password.directive';
import { ForbidenNamesDirective } from './directives/forbiden-names.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormTemplateComponent,
    ConfirmPasswordDirective,
    ForbidenNamesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
