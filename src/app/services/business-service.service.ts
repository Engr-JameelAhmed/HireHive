import { Injectable } from '@angular/core';
import { Business } from '../Models/Business';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  private apiUrl = 'http://localhost:9090/business';  // API endpoint
  myBusiness: Business;

  constructor(private http: HttpClient) { }



  createBusiness(business: Business): Observable<Business> {
    return this.http.post<Business>(`${this.apiUrl}/create`, business);
  }

  getAllActiveBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.apiUrl}/activeBusinesses`);
  }
  getAllPendingBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.apiUrl}/pendingBusinesses`);
  }


}
