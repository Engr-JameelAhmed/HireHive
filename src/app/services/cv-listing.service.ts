import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class CvListingService {
  private baseUrl = 'http://localhost:9090';
  private endpoint = '/job/employerApplication';
  private cvUpload = 'http://localhost:9090/user/update-user-cv'
  private downloadCVEndpoint = '/cv/download'
  private UpdateApplication = 'http://localhost:9090/application';
 
  constructor(private http: HttpClient) {}

  getAllCvOfLoggedEmployer() {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`).pipe(
      catchError(error => {
        console.error('Error fetching CVs:', error);
        return throwError(error);
      })
    );
  }

  updateUserCv(file: File | null): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.put<HttpEvent<any>>(this.cvUpload, formData, {
      observe: 'events',
      headers: new HttpHeaders({
        // No need to set Content-Type as multipart/form-data, FormData will handle it.
      })
    });
  }

  downloadCV(userId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}${this.downloadCVEndpoint}/${userId}`, {
      responseType: 'blob'  // Specify that the response type is a Blob
    });
  }

  updateApplicationStatus(applicationId: number): Observable<void> {
    return this.http.put<void>(`${this.UpdateApplication}/${applicationId}/status/reject`, {});
    };
  }

