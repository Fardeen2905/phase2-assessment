import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private _router: Router) {}
  canActivate() {
    if (localStorage.getItem('user')) return true;
    this._router.navigate(['/login']);
    return false;
  }

  
}
