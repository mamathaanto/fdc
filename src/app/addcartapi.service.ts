import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addcart } from './addcart';

@Injectable({
  providedIn: 'root'
})
export class AddcartapiService {

  constructor(private http:HttpClient) { }
  addtocartdata=[]
  url="http://192.168.1.43/api/add-to-cart";
  addtocart(user:Addcart){
   
    var formdata=new FormData;
    formdata.append("productid",user.productid)
    formdata.append("userid",user.userid)

    return this.http.post<any>(this.url,formdata)
  }
}
