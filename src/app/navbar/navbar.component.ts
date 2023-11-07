import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from '../services/tokenstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  username!:string;
  private role : string[]=[];
  showUserPart=false;
  showAdminPart=false;

  constructor(private tokenservice:TokenstorageService) { }

  ngOnInit(): void {
    //this.username='';
    this.isLoggedIn=!! this.tokenservice.getToken();
    if(this.isLoggedIn){
      const user = this.tokenservice.getUser();
      this.username = user.username;
      this.role = user.role;
      this.showAdminPart=this.role.includes('ROLE_ADMIN');
      this.showUserPart=this.role.includes('ROLE_USER');
    }
  }
 logout(){
  this.tokenservice.logout();
  window.location.reload();
 }
}
