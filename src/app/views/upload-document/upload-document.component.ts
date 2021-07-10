import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

	constructor(private router:Router) { 

		let access_token = localStorage.getItem('access-token');
		console.log(access_token);
	}

	ngOnInit(): void {
	}

	logout(){
		localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
        localStorage.removeItem('is_active');
        this.router.navigate(['/login']);
	}

}
