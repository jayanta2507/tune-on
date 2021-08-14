import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../../core/services/Helper/helper.service';
import { CommonService } from '../../../core/services/Common/common.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  subscriptions: Subscription[] = [];
  requestData: any              = {};
  isLoading: boolean            = false;
  commonRequestData:any         = {};
  totalClient:number           = 0;
  client:any                    = [];
  sortKey:any                   = "DESC";
  //sortType:any                  = "DESC";
  currentPage:any               = 1;
  searchText:any                = "";
  searchStatus:number           = 0;

	

  constructor(private router: Router,
  	 private helperService: HelperService,
    private commonService: CommonService) { }

  ngOnInit(): void {
  		this.fetchClient();
  }

   navigateToDetails(clientId){
    this.router.navigate(['client-details/'+btoa(clientId)])
  }
   navigateToEdit(clientEditId){
    this.router.navigate(['client-edit/'+btoa(clientEditId)])
  }


 startSearch() {
    if((this.searchText && this.searchText.length >= 3) || (this.searchText === '')) {
      this.currentPage   = 1;
      this.client = [];
      this.searchStatus  = 1;
      this.fetchClient();
    }
  }
 sortKeyF(){
  if(this.sortKey=='DESC'){
    this.sortKey = 'ASC'
    }else{
     this.sortKey = 'DESC'
     }
     }




   clearSearch(){
    this.currentPage = 1;
    this.client = [];
    this.searchText  = "";
    this.fetchClient();
  }
  
  onScroll(){
    console.log("this is test")
    this.currentPage = this.currentPage + 1;
    this.fetchClient();

  }

  fetchClient() {

    if (this.searchStatus==0) {
      this.isLoading = true;
    }
    

    this.subscriptions.push(
      this.commonService.getAPICall({
        url :'auth/getclient',
        data: {page: this.currentPage, search: this.searchText, sortKey: this.sortKey}
      }).subscribe((result)=>{
        this.isLoading = false;
        if(result.status == 200) {

          if(this.currentPage == 1) {
            this.client = result.data;
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

   // On Scroll Pagination

  openDeleteConfirmation(clientId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete this album category ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.deleteClient(clientId)
        } 
      })
  } 

   deleteClient(clientId){
      this.isLoading = true;
      this.subscriptions.push(
        this.commonService.deleteAPICall({
          url :'auth/client-delete/' + clientId,
        }).subscribe((result)=>{
          this.isLoading = false;
          if(result.status == 200) {
            this.helperService.showSuccess(result.msg);
            this.currentPage = 1;
            this.client= [];
            this.fetchClient();
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
