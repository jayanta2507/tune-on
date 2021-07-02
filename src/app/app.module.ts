import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';



//***************  TEST FIREBASE CONFIGURATION  ******************/
// export const firebaseConfig = {
//     apiKey: "AIzaSyBfpYU_7DfmnE9rj30SJ8ufsccKY2lmptU",
//     authDomain: "kawawa-music-68cb9.firebaseapp.com",
//     projectId: "kawawa-music-68cb9",
//     storageBucket: "kawawa-music-68cb9.appspot.com",
//     messagingSenderId: "708924357464",
//     appId: "1:708924357464:web:cdbd722e10f6e645f5032d",
//     measurementId: "G-S635QSEVKY"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyDwCO42cNmZiTSYdWy0aEVuXq-IGWbi86s",
//   authDomain: "kawawa-music-c904d.firebaseapp.com",
//   projectId: "kawawa-music-c904d",
//   storageBucket: "kawawa-music-c904d.appspot.com",
//   messagingSenderId: "557957380656",
//   appId: "1:557957380656:web:a8f021d1dab2955f960bf5",
//   measurementId: "G-N95M2KF20H"
// };

@NgModule({
  imports: [
   
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
    
   
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
   
  ],
  providers: [
    
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
