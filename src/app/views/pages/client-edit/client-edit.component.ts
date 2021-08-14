import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../../core/services/Helper/helper.service';
import { CommonService } from '../../../core/services/Common/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
	addForm: FormGroup; 
	formSubmitted: boolean = false;
	subscriptions: Subscription[] = [];
	isLoading: boolean = false;

    
	clientDetails:any  = [];
	currentPage:any   = 1;
	searchText:any    = "";
	sortKey:any       = 2;
	sortType:any      = "DESC";

	clientId:any     = ""; 

  constructor(private _formBuilder: FormBuilder,
		private commonService: CommonService,
		private helperService: HelperService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { 
  	     this.subscriptions.push(this.activatedRoute.params.subscribe(params => {
	      this.clientId = atob(params['id']);
	      console.log(this.clientId)
	    }));
  }

  ngOnInit(): void {
  	    this.createAddForm();
		this.getClientDetails();
  }

  createAddForm() {
	    this.addForm = this._formBuilder.group({
			title: ['', [Validators.required]],
			name: ['', [Validators.required]],
			selectPodcast: ['', [Validators.required]],
			selectEngagementManager: ['', [Validators.required]],
			country: ['', [Validators.required]],
			phone: ['', [Validators.required]],
	    })
	}


  	getClientDetails(){

	    this.subscriptions.push(
	      this.commonService.getAPICall({
	        url: 'auth/client-details/'+this.clientId,  
	      }).subscribe((result)=>{
	        this.isLoading = false;
	        if(result.status == 200) {
	        	this.clientDetails = result.data[0];
	        	console.log(this.clientDetails);
	        	this.addForm.patchValue({
            	   	title                      : this.clientDetails.title,
            	   	name                       : this.clientDetails.name,
            	    selectPodcast              : this.clientDetails.selectPodcast,
            	    selectEngagementManager    : this.clientDetails.selectEngagementManager,
            	    country                    : this.clientDetails.country,
            	    phone                      : this.clientDetails.phone,
            	    
            	});

	        	//console.log(this.clientDetails.data.name)
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

  		submitClient(){
  		this.formSubmitted = true;
		//console.log(this.addForm);
	    if(this.addForm.invalid) return;

		let postData = {
			title                   : this.addForm.get('title').value,
			name                    : this.addForm.get('name').value,
			selectPodcast           : this.addForm.get('selectPodcast').value,
			selectEngagementManager : this.addForm.get('selectEngagementManager').value,
			country                 : this.addForm.get('country').value,
			phone                   : this.addForm.get('phone').value,
			
			
			
		}

	    this.subscriptions.push(
	      this.commonService.putAPICall({
	        url: 'auth/client-edit/'+this.clientId,
	        data: postData
	      }).subscribe((result)=>{
	        this.isLoading = false;
	        if(result.status == 200) {
	          this.helperService.showSuccess(result.msg);
	          this.router.navigate(['/client'])
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
