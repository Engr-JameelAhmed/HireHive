import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../Models/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:9090';
  private endpoint = '/application/create';

  constructor(private http: HttpClient) {}


  createNewApplication(application: Application){
    return this.http.post<Application>(`${this.baseUrl}${this.endpoint}`,application);
  }

}
