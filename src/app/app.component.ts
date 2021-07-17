import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {

  isHeader: boolean = true;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.getAccess();
  }


  getAccess(){
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {

        let str = event.url;
        str = str.replace(/\//g, '');

        console.log(str)

        if(str=='' || str=='login' || str=='register'){
          this.isHeader = false;
        }else{
          this.isHeader = true;
        }
        
      }
    });
  }
}
