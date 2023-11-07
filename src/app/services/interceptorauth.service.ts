import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenstorageService } from './tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorauthService implements HttpInterceptor {

  TOKEN_HEADER_KEY='Authorization';

  constructor(private tokenservice:TokenstorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //copier la requete HTTP
    let auth_req = req;

    //recuperer le token a partir di session storge
    const token = this.tokenservice.getToken();

    //injecter le token dans la requete http
    if(token != null){
      auth_req=req.clone({headers:req.headers.set(this.TOKEN_HEADER_KEY,'Bearer '+token)});
    }
    return next.handle(auth_req);
  }
  }
  export const authentificationProvider = [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorauthService, multi:true}
  ];


