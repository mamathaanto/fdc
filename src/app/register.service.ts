import { Injectable, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { User1 } from './user1';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 

  constructor(private http:HttpClient) { }
  registerdata:any=[]
  url="http://192.168.1.43/api/user-registration";
   register(user:User1){
    var formdata=new FormData();
    formdata.append("name",user.name ) 
    formdata.append("email",user.email)
    formdata.append("password",user.password)
    formdata.append("phone",user.phone)



    return this.http.post<any>(this.url,formdata);


    
  
    
  }
 
 
}
