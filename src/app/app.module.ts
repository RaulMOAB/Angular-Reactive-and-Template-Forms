import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ConfirmPasswordDirective } from './directives/confirm-password.directive';
import { ForbidenNamesDirective } from './directives/forbiden-names.directive';
import { AppRoutingModule } from './app-routing.module';
import { GenderTranslationPipe } from './pipes/gender-translation.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormTemplateComponent,
    ConfirmPasswordDirective,
    ForbidenNamesDirective,
    GenderTranslationPipe,
    PageNotFoundComponent,
    UserListComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
