import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('access-token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
