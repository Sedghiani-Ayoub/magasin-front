import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private url='http://localhost:8082/magasin/api/auth'
  constructor(private http:HttpClient) { }

  login(forms:any):Observable<any>{
    return this.http.post(this.url+'/signin',{username:forms.username,password:forms.password});
  }

  subscribe(value:any):Observable<any>{
    return this.http.post(this.url+'/signup',value);
  }
}
