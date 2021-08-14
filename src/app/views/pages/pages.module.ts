import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ClientComponent } from './client/client.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

//import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ClientComponent,
    ClientAddComponent,
    ClientDetailsComponent,
    ClientEditComponent,
    //HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
