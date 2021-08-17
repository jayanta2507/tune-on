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
import { AnalystListComponent } from './analyst/analyst-list/analyst-list.component';
import { AnalystAddComponent } from './analyst/analyst-add/analyst-add.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AnalystDeatilsComponent } from './analyst/analyst-deatils/analyst-deatils.component';
import { AnalystEditComponent } from './analyst/analyst-edit/analyst-edit.component';

//import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ClientComponent,
    ClientAddComponent,
    ClientDetailsComponent,
    ClientEditComponent,
    AnalystListComponent,
    AnalystAddComponent,
    AnalystDeatilsComponent,
    AnalystEditComponent,
    //HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class PagesModule { }
