import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../../../core/services/Helper/helper.service';
import { CommonService } from '../../../../core/services/Common/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  selector: 'app-analyst-deatils',
  templateUrl: './analyst-deatils.component.html',
  styleUrls: ['./analyst-deatils.component.css']
})
export class AnalystDeatilsComponent implements OnInit {

	addForm: FormGroup;
	formSubmitted: boolean = false;
	subscriptions: Subscription[] = [];
	isLoading: boolean = false;

	analystDetails:any  = [];
	currentPage:any   = 1;
	searchText:any    = "";
	sortKey:any       = 2;
	sortType:any      = "DESC";
	analystId:any     = "";

	
  constructor(private _formBuilder: FormBuilder,
		private commonService: CommonService,
		private helperService: HelperService,
		private router: Router,
		private activatedRoute: ActivatedRoute) {

  	this.subscriptions.push(this.activatedRoute.params.subscribe(params => {
	      this.analystId = atob(params['id']);
	    console.log(this.analystId);
	    })); 
  }

  ngOnInit(): void {
  	this.getAnalystDetails();
  }


  	getAnalystDetails(){

	    this.subscriptions.push(
	      this.commonService.getAPICall({
	        url: 'user/get-analyst-details/'+this.analystId,  
	      }).subscribe((result)=>{
	        this.isLoading = false;
	        if(result.status == 200) {
	        	this.analystDetails = result.data[0];
	        	console.log(this.analystDetails);
	        	this.addForm.patchValue({
            	   	title                      : this.analystDetails.title,
            	   	name                       : this.analystDetails.name,
            	    email                      : this.analystDetails.email,
            	    phone                      : this.analystDetails.contact,
            	    organisation               : this.analystDetails.organisation,
            	    address                    : this.analystDetails.address,
            	    city                       : this.analystDetails.city,
            	    state                      : this.analystDetails.state,
            	    zip                        : this.analystDetails.pincode          	    
            	});

	        	//console.log(this.analystDetails.data.name)
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
