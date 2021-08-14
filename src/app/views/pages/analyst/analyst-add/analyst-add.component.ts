import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { HelperService } from '../../../../core/services/Helper/helper.service';
import { CommonService } from '../../../../core/services/Common/common.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyst-add',
  templateUrl: './analyst-add.component.html',
  styleUrls: ['./analyst-add.component.css']
})
export class AnalystAddComponent implements OnInit {

  addForm: FormGroup;
  formSubmitted: boolean = false;
  subscriptions: Subscription[] = [];
  isLoading: boolean = false;

  constructor(private _formBuilder: FormBuilder,  
    private commonService: CommonService,
       private helperService: HelperService,
    private router: Router) 
    {

    }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm() {
    this.addForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      password:['',[Validators.required]]
    })
  }

  // Get Form Control
  get f() {
    return this.addForm.controls;
  }

  createAnalyst(){
    this.formSubmitted = true;
    
    if(this.addForm.invalid) return;
  }

}
