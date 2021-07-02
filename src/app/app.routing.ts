import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    },
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
