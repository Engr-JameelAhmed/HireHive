import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { filter, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:9090/user/newUser'; 

  
  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User, file?: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    if (file) {
      formData.append('file', file);
    }
  
    // Set the appropriate headers
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
  
    return this.http.post<any>(this.apiUrl, formData, { headers: headers });
  }




}
