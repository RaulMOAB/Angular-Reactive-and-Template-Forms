import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'form-template',
    component: FormTemplateComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: '/reactive-form',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot((routes))
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
