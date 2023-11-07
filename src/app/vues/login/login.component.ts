import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage='';
  roles: String[]=[];

  constructor(private auth:AuthentificationService,private tokenservice:TokenstorageService) { }

  ngOnInit(): void {
    if(this.tokenservice.getToken()!= null){
      this.isLoggedIn=true;
      this.roles=this.tokenservice.getUser().role;
      alert("on est connecté"+this.isLoggedIn+" role : "+this.roles);
    }
  }

  onSubmit(){
    this.auth.login(this.form).subscribe(
      data => {
        //console.log(data);
        this.tokenservice.saveToken(data.token);
        this.tokenservice.saveUser(JSON.stringify(data));
        this.isLoggedIn=true;
        this.isLoginFailed=false;
        this.roles=this.tokenservice.getUser().role;
        window.location.reload();
      },
      error =>{
        //console.log(error)
        this.isLoggedIn=false;
        this.isLoginFailed=true;
        this.errorMessage ="Authentification Failed !!!";
      }
      
      
    )
  }

}
