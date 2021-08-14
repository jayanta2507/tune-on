import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ViewHeaderComponent } from './views/view-header/view-header.component';
import { ViewFooterComponent } from './views/view-footer/view-footer.component';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';




@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewHeaderComponent,
    ViewFooterComponent

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
