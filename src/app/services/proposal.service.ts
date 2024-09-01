import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proposal } from '../Models/Proposal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private apiUrl = 'http://localhost:9090';
  private endpoint = '/investment/createInvestment';
 
  constructor(private http: HttpClient) {}

  createInvestment(proposal: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>(`${this.apiUrl}/investment/createInvestment`, proposal);
  }

  getAllInvestmentsOfCurrentLoggedUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/investment/currentUserAllInvestments`);
  }

 
}
