import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private getLogin="http://localhost:8080/signin"

  constructor(private http:HttpClient) {
  
   }
   LoginUser(user:any){
     return this.http.post<any>(this.getLogin,user)
  }
}
