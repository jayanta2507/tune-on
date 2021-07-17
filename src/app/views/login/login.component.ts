import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../core/services/Common/common.service';
import { HelperService } from '../../core/services/Helper/helper.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

//import { noSpace } from '../../shared/custom-validators/nospacesvalidator';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	loginForm:FormGroup;
  formSubmitted: boolean = false;
  requestData: any = {};
  isLoading: boolean = false;
	

  constructor(
    private fb: FormBuilder, 
    private helperService: HelperService,
    private commonService: CommonService,
    private router: Router
   ) { 
    //console.log(this.fb)
  }

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
     
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  // f(){
  //   return this.login
  // }


  submitLoginForm() {
    this.formSubmitted = true;
    
    if(this.loginForm.invalid) return;

    this.requestData.url = 'login';
    this.requestData.data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    
    this.isLoading = true;
    this.commonService.postAPICall(this.requestData).subscribe((result)=>{

      this.isLoading = false;
      if(result.status == 200) {

        localStorage.setItem('access-token',result.data.access_token);
        localStorage.setItem('refresh-token',result.data.refresh_token);
        localStorage.setItem('is_active',result.data.is_active);

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
}
