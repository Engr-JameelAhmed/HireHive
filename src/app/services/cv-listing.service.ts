import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvListingService {
  private baseUrl = 'http://localhost:9090';
  private endpoint = '/job/employerApplication';
 
  constructor(private http: HttpClient) {}

  getAllCvOfLoggedEmployer() {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`).pipe(
      catchError(error => {
        console.error('Error fetching CVs:', error);
        return throwError(error);
      })
    );
  }
}
