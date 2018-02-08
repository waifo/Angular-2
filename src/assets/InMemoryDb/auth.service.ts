import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isUserLoogedIn: boolean;
  isAdminLoogedIn: boolean;
    redirectUrl: string;
  constructor() {
    if (sessionStorage.getItem('isUserLoogedIn') === '1') {
       this.isUserLoogedIn = true;
    } else {
        this.isUserLoogedIn = false;
    }
    if (sessionStorage.getItem('isAdminLoogedIn') === '1') {
      this.isAdminLoogedIn = true;
   } else {
       this.isAdminLoogedIn = false;
   }
   }
  // TODO: replace login with onservable and google+ authenticationServices
  // authenticationServices
  logIn1(email, password): Promise<any> {
    const resolveObj = {
      access: '',
      data: undefined
    };
    if (email === 'admin' && password === 'admin') {
      resolveObj.access = 'AdminAccess';
      this.isAdminLoogedIn = true;
      this.redirectUrl = '/admin';
      return Promise.resolve(resolveObj);
    } else if (email === 'user1' && password === 'user1') {
      resolveObj.access = 'UserAccess';
      this.redirectUrl = '/user';
      this.isUserLoogedIn = true;
      resolveObj.data = 1;
      return Promise.resolve(resolveObj);
    } else if (email === 'user2' && password === 'user2') {
      resolveObj.access = 'UserAccess';
      this.redirectUrl = '/user';
      this.isUserLoogedIn = true;
      resolveObj.data = 2;
      return Promise.resolve(resolveObj);
    } else {
      return Promise.reject('Aunthentication failed');
    }
  }
}
