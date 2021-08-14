import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../core/services/Common/common.service';
import { HelperService } from '../../core/services/Helper/helper.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import * as moment from 'moment';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  regFormSubmitted: boolean = false;
  regRequestData: any = {};
  formSubmitted: boolean = false;
  requestData: any = {};
  isLoading: boolean = false;
  commonRequestData:any = {};

  countries:any = [];
	


  constructor( private router: Router,
  	 private fb: FormBuilder,
  	 private helperService: HelperService,
    private commonService: CommonService) { }

  ngOnInit(): void {
  	this.fetchCountries();
  	this.createRegForm();
  }

  createRegForm() {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      title: ['', [Validators.required]]
      
    });
    console.log(this.regForm)

  }
    
  // get rf() {
  //   return this.regForm.controls;
  // }


    submitRegForm() {
      this.regFormSubmitted = true;
      if(this.regForm.invalid) return;

      this.regRequestData.url = 'auth/registration';
      this.regRequestData.data = {
        name: this.regForm.get('name').value,
        email: this.regForm.get('email').value,
        contact: this.regForm.get('contact').value,
        password: this.regForm.get('password').value,
        title: this.regForm.get('title').value
        
       
      }

      this.isLoading = true;
      this.commonService.postAPICall(this.regRequestData).subscribe((result)=>{
        this.isLoading = false;
        if(result.status == 200) {
          this.helperService.showSuccess(result.msg);
          this.router.navigate(['/dashboard']);
        }
        else{
          this.helperService.showError(result.msg);
        }
      },(err)=>{
        this.isLoading = false;
        this.helperService.showError(err.error.msg);
      })
    }

   fetchCountries() {
    this.commonRequestData.url = 'home/active-countries';

    this.isLoading = true;
    this.commonService.getAPICall(this.commonRequestData).subscribe((result)=>{
      this.isLoading = false;
      if(result.status == 200) {
        this.countries = result.data;

        console.log(this.countries)
      }
      else{
        this.helperService.showError(result.msg);
      }
    },(err)=>{
      this.isLoading = false;
      this.helperService.showError(err.error.msg);
    })
  }

}
