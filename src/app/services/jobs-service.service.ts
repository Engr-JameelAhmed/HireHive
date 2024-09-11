import { Injectable } from "@angular/core";
import { Jobs } from "../Models/Jobs";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:9090/job';  // API endpoint

  myJob: Jobs;
  constructor(private http: HttpClient){}


  getAllJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiUrl}/allJobs`);
  }
  getAllNotJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiUrl}/notapplied-jobs-for-current-user`);
  }
  createJob(job: Jobs): Observable<Jobs> {
    return this.http.post<Jobs>(`${this.apiUrl}/createJob`, job);
  }
  getAllJobsOfCurrentLoggedEmployer(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiUrl}/employerPostedJobs`);
  }

  getAllAppliedJobs(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/applied-jobs-for-current-user`); 
  }
}
