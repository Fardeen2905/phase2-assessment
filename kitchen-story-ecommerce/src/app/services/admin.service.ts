import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iadmin } from '../models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) {}
  getAdmin(): Observable<Iadmin[]> {
    return this._http.get<Iadmin[]>('http://localhost:3001/admin');
  }
}