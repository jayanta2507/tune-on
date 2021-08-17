import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../../../core/services/Helper/helper.service';
import { CommonService } from '../../../../core/services/Common/common.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-analyst-list',
  templateUrl: './analyst-list.component.html',
  styleUrls: ['./analyst-list.component.css']
})
export class AnalystListComponent implements OnInit {


  subscriptions: Subscription[] = [];
  requestData: any              = {};
  isLoading: boolean            = false;
  commonRequestData:any         = {};
  totalAnalyst:number           = 0;
  analyst:any                   = [];
  sortKey:any                   = "DESC";
  currentPage:any               = 1;
  searchText:any             = "";
  searchStatus:number           = 0;

  

  constructor(private _formBuilder: FormBuilder,  
    private commonService: CommonService,
       private helperService: HelperService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchAnalyst();
  }

   startSearch() {
    if((this.searchText && this.searchText.length >= 3) || (this.searchText === '')) {
      this.currentPage   = 1;
      this.analyst = []; 
      this.searchStatus  = 1;
      this.fetchAnalyst();
    }
  }

   clearSearch(){
    this.currentPage = 1;
    this.analyst = [];
    this.searchText  = "";
    this.fetchAnalyst();
  }
  

   navigateToDetails(analystId){
    this.router.navigate(['analyst-details/'+btoa(analystId)])
     }


   navigateToEdit(analystEditId){
    this.router.navigate(['analyst-edit/'+btoa(analystEditId)])
     }

      openDeleteConfirmation(analystId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete this album category ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.deleteAnalyst(analystId)
        } 
      })
    } 

      deleteAnalyst(analystId){
      this.isLoading = true;
      this.subscriptions.push(
        this.commonService.deleteAPICall({
          url :'user/delete-analyst/' + analystId,
        }).subscribe((result)=>{
          this.isLoading = false;
          if(result.status == 200) {
            this.helperService.showSuccess(result.msg);
            this.currentPage = 1;
            this.analyst= [];
            this.fetchAnalyst();
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


    fetchAnalyst() {
    if (this.searchStatus==0) {
      this.isLoading = true;
    }
    this.subscriptions.push(
      this.commonService.getAPICall({
        url :'user/get-analyst',
        data: {page: this.currentPage, search: this.searchText, sortKey: this.sortKey}
      }).subscribe((result)=>{
        this.isLoading = false;
        if(result.status == 200) {

          if(this.currentPage == 1) {
            this.analyst = result.data;
          }
          this.searchStatus = 0;
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
