import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
//"http://192.168.1.43/api/menu"
  getproduct(){
   return this.http.get<any>("http://192.168.1.43/api/menu")
   .pipe(map((res:any)=>{
        return res;
   }))
  }


}
