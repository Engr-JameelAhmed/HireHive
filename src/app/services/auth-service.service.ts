import { Injectable } from '@angular/core';
import { User, UserResponse } from '../Models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:9090';
  private authUrl = 'http://localhost:9090/api/auth';
  private UserBaseUrl = '/user';
  private logged = '/login';
  data: any;


  isLogged: Boolean = false;
  constructor(private http: HttpClient){}

  createUser(userDetails: User){
    return this.http.post(`${this.baseUrl}/users`, userDetails)
  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`)
  }


  login(user: UserResponse): Observable<any>{
    // this.data = this.http.post<any>('http://localhost:9090/api/auth/login',user);
    // debugger

    // console.log(this.data);
    return this.http.post<any>('http://localhost:9090/api/auth/login',user);
  }

  logout(){
    this.isLogged = false;
  }


  isAuthenticated(){
    return this.isLogged;
  }
}
