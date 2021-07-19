import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ViewHeaderComponent } from './view-header/view-header.component';
// import { ViewFooterComponent } from './view-footer/view-footer.component';


@NgModule({
  declarations: [
    ViewsComponent,
    LoginComponent,
    RegisterComponent,
    // ViewHeaderComponent,
    // ViewFooterComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
