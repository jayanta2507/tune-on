import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { HelperService } from '../../../core/services/Helper/helper.service';
import { CommonService } from '../../../core/services/Common/common.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

	addForm: FormGroup;
	formSubmitted: boolean = false;
	subscriptions: Subscription[] = [];
	isLoading: boolean = false;

  constructor(private _formBuilder: FormBuilder,  
		private commonService: CommonService,
			 private helperService: HelperService,
		private router: Router) { }

  ngOnInit(): void {
  	this.createAddForm();
  }

  	createAddForm() {
	    this.addForm = this._formBuilder.group({
			title: ['', [Validators.required]],
			name: ['', [Validators.required]],
			email: ['', [Validators.required]],
			selectEngagementManager: ['', [Validators.required]],
			country: ['', [Validators.required]],
			phone: ['', [Validators.required]],
			price: ['', [Validators.required]],
			selectPodcast: ['', [Validators.required]],
			password:['',[Validators.required]]
			
  		})
	}

	createClient(){
		this.formSubmitted = true;
		
	    if(this.addForm.invalid) return;

		let postData = {
			title: this.addForm.get('title').value,
			name : this.addForm.get('name').value,
			email : this.addForm.get('email').value,
			selectEngagementManager : this.addForm.get('selectEngagementManager').value,
			country : this.addForm.get('country').value,
			phone : this.addForm.get('phone').value,
			price : this.addForm.get('price').value,
			selectPodcast : this.addForm.get('selectPodcast').value,
			password : this.addForm.get('password').value
		}

	    this.subscriptions.push(
	      this.commonService.postAPICall({
	        url: 'auth/client',
	        data: postData
	      }).subscribe((result)=>{
	        this.isLoading = false;``
	        if(result.status == 200) {
	          this.router.navigate(['/client']);
	          window.location.reload();
	        }
	        else{
	          this.helperService.showError(result.msg);
	        }
	      },(err)=>{
	        this.isLoading = false;
	        this.helperService.showError(err.error.msg);
	      })
	    )
  	}



}
