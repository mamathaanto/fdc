import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  logindata:any=[]
  url="http://192.168.1.43/api/user-login";
 
  login(user:User1){
  var formdata=new FormData();
  formdata.append("email",user.email);
  formdata.append("password",user.password);
  return this.http.post<any>(this.url,formdata)
  }
 


  


}
