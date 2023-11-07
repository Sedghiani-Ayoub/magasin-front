import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
basic_url='http://localhost:8082/magasin/products';
  constructor(private http:HttpClient) { }

   getProducts():Observable<any>{
    return this.http.get(`${this.basic_url}`);
  
    }
    deleteProduct(id:any):Observable<any>{
      return this.http.delete(`${this.basic_url}/${id}`)
    }

    createProduct(value:any):Observable<any>{
      return this.http.post(`${this.basic_url}`,value)
    }

    getProduct(id:any):Observable<any>{
      return this.http.get(`${this.basic_url}/${id}`)

    }
    updateProduct(id:any,value:any){
      return this.http.put(`${this.basic_url}/${id}`,value)
    }
}

