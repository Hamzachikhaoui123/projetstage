import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private getLogin="http://localhost:8080/signin";
  private registerUserUrl = "http://localhost:8080/signup"
  

  constructor(private http:HttpClient) {
  
   }
   registerUser(user: any) {
    return this.http.post<any>(this.registerUserUrl, user);
  }
   LoginUser(user:any){
     return this.http.post<any>(this.getLogin,user)
  }
  isLoggedIn() {
    let token = localStorage.getItem("myToken");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
}
