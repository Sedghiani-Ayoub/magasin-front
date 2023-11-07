import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {

  TOKEN_KEY='auth_token';
  USER_KEY='auth_user';

  constructor() { }

  logout(){
    window.sessionStorage.clear();

  }

  public saveToken(token:string){
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY,token);
  }

  public getToken():any{
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  public saveUser(user:any){
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY,user);
  }

  public getUser():any{
    return JSON.parse(sessionStorage.getItem(this.USER_KEY)!);
  }


}

