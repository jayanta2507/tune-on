import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UploadDocumentComponent } from './views/upload-document/upload-document.component';
import { EshaLoginComponent} from './views/esha-login/esha-login.component';


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
    }
  },
    {
    path: 'upload-document',
    component:  UploadDocumentComponent,
    data: {
      title: 'Upload Document'
    },
  },
  {
    path: 'esha-login',
    component:  EshaLoginComponent,
    data: {
      title: 'Esha Login'
    },
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
