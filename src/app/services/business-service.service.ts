import { Injectable } from '@angular/core';
import { Business } from '../Models/Business';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  private apiUrl = 'http://localhost:9090/business';  // API endpoint
  private downloadCVEndpoint = '/download'
  myBusiness: Business;

  constructor(private http: HttpClient) { }  



  createBusiness(business: Business,  file?: File): Observable<any> {
    const formData = new FormData();
    formData.append('business', JSON.stringify(business));
    if (file) {
      formData.append('file', file);
    }

    // Set the appropriate headers
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/create`,  formData, { headers: headers });
  }

  getAllActiveBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.apiUrl}/activeBusinesses`);
  }
  getAllPendingBusinesses(): Observable<Business[]> {
    return this.http.get<Business[]>(`${this.apiUrl}/pendingBusinesses`);
  }

  downloadBusinessProposal(userId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}${this.downloadCVEndpoint}/${userId}`, {
      responseType: 'blob'  // Specify that the response type is a Blob
    });
  }

  


}
