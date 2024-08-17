import { Injectable } from "@angular/core";
import { Jobs } from "../Models/Jobs";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:9090/job/allJobs';  // API endpoint

  desc: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ea non amet et laborum? Autem fugit, distinctio neque voluptatibus totam nostrum, quisquam alias praesentium ratione similique dolorum quam et enim!';
  constructor(private http: HttpClient){}



  // jobs: Jobs[] = [
  //   new Jobs(1,this.desc,'Java Developer', 'full time', 'karachi','IT','Onsite'),
  //   new Jobs(2, this.desc,'Email Marketing', 'full time', 'Chaghi','Marketing','Onsite'),
  //   new Jobs(3, this.desc,'Chartered Accountant', 'full time', 'Quetta','Finance','Onsite'),
  //   new Jobs(4, this.desc,'Clinal psychologist', 'part time', 'Nushki','Psychology','Onsite'),
  //   new Jobs(4, this.desc,'Angular Developer', 'full time', 'Karachi','IT','Onsite'),
  //   new Jobs(1,this.desc,'Java Developer', 'full time', 'karachi','IT','Onsite'),
  //   new Jobs(2, this.desc,'Email Marketing', 'full time', 'Chaghi','Marketing','Onsite'),
  //   new Jobs(3, this.desc,'Chartered Accountant', 'full time', 'Quetta','Finance','Onsite'),
  //   new Jobs(4, this.desc,'Clinal psychologist', 'part time', 'Nushki','Psychology','Onsite'),
  //   new Jobs(4, this.desc,'Angular Developer', 'full time', 'Karachi','IT','Onsite')
  // ];

  getAllJobs(): Observable<Jobs[]> {
    console.log('Inside the get All Jobs');
    
    return this.http.get<Jobs[]>(this.apiUrl);
  }

}
