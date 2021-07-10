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
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      mobile_no: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      country_id: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    });
    console.log(this.regForm)

  }

 
  // get rf() {
  //   return this.regForm.controls;
  // }


    submitRegForm() {
    this.regFormSubmitted = true;
    if(this.regForm.invalid) return;

    this.regRequestData.url = 'register';
    this.regRequestData.data = {
      full_name: this.regForm.get('full_name').value,
      email: this.regForm.get('email').value,
      mobile_no: this.regForm.get('mobile_no').value,
      password: this.regForm.get('password').value,
      confirm_password: this.regForm.get('confirm_password').value,
      dob: moment(this.regForm.get('dob').value).format('YYYY-MM-DD'),
      country_id: this.regForm.get('country_id').value
    }

    this.isLoading = true;
    this.commonService.postAPICall(this.regRequestData).subscribe((result)=>{
      this.isLoading = false;
      if(result.status == 200) {
        this.helperService.showSuccess(result.msg);
        this.router.navigate(['/login']);
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
    this.commonRequestData.url = 'active-countries';

    this.isLoading = true;
    this.commonService.getAPICall(this.commonRequestData).subscribe((result)=>{
      this.isLoading = false;
      if(result.status == 200) {
        this.countries = result.data.countries;
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
