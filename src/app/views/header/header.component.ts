import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
