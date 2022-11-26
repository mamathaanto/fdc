import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 /* authuser(user:any){
  let userarray=[]
  if(localStorage.getItem('users')){
    userarray=JSON.parse(localStorage.getItem('users'));
  }
  return userarray.find(p =>p.username===user.username  && p.password === user.password)
} */
}
