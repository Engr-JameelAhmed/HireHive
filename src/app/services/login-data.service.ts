import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  // Define an object to hold the role and login status
  private dataSource = new BehaviorSubject<{ CurrentloggedRole: string; loggedIn: boolean }>({ CurrentloggedRole: '', loggedIn: false });
  currentData = this.dataSource.asObservable();



  constructor() { }

  changeData(data: { CurrentloggedRole: string; loggedIn: boolean }) {
    this.dataSource.next(data);
  }

}
