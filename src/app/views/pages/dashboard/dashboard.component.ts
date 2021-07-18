import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'pages-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
