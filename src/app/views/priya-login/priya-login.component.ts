import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../core/services/Common/common.service';
import { HelperService } from '../../core/services/Helper/helper.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Component({
  selector: 'app-priya-login',
  templateUrl: './priya-login.component.html',
  styleUrls: ['./priya-login.component.css']
})
export class PriyaLoginComponent implements OnInit {

  priyaLoginForm : FormGroup;
  priyaFormSubmitted: boolean = false;
  requestData: any = {};
  isLoading: boolean = false;


  constructor(private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private helperService: HelperService
) { }

  ngOnInit(): void {
    this.createForm();
  }
createForm(){
  this.priyaLoginForm =this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })
}
submitLoginForm() {
    this.priyaFormSubmitted = true;
    
    if(this.priyaLoginForm.invalid) return;

    this.requestData.url = 'login';
    this.requestData.data = {
      email: this.priyaLoginForm.value.email,
      password: this.priyaLoginForm.value.password
    }
      this.isLoading = true;
    this.commonService.postAPICall(this.requestData).subscribe((result)=>{

      this.isLoading = false;
      if(result.status == 200) {

        localStorage.setItem('access-token',result.data.access_token);
        localStorage.setItem('refresh-token',result.data.refresh_token);
        localStorage.setItem('is_active',result.data.is_active);

        this.helperService.showSuccess(result.msg);
        this.router.navigate(['/upload-document']);
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
