import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private basic_url ='http://localhost:8082/magasin/comments'

  constructor(private http:HttpClient) {}

  postComment(value:any):Observable<any>{
    return this.http.post(`${this.basic_url}`,value);
    //return this.http.post(`${this.basic_url}?idProduct=${idp}&text=${text}`,'');
  }
}
//http://localhost:8082/magasin/comments?idProduct=6&text=NiceProduct