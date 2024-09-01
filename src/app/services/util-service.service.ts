import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  roleChanged = new EventEmitter<string>();


  getRoleFromToken(): string {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken = this.parseJwt(token);
      return decodedToken.ROLES[0];
    }
    return null;
  }
   // Method to check if the user is logged in
   isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(base64);
  }
 
}
