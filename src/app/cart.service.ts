import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartitemlist:any=[];
  public productlist=new BehaviorSubject<any>([])
  constructor() { }
  getproducts(){
    return this.productlist.asObservable();
  }

  setproduct(product:any){
    this.cartitemlist.push(...product)
    this.productlist.next(product)
  }

  addtocart(product:any){
      this.cartitemlist.push(product)
      this.productlist.next(this.cartitemlist)
      this.gettotalprice();
      console.log(this.cartitemlist);
  }

  gettotalprice()  :number{
    let grandtotal=0;
    this.cartitemlist.map((a:any)=>{
      grandtotal =grandtotal+ (a.total*a.quantity)
    })
    return grandtotal
  }

  removecartitem(product:any){
      this.cartitemlist.map((a:any,index:any)=>{
        if(product.id===a.id)
          this.cartitemlist.splice(index,1)
      })
      this.productlist.next(this.cartitemlist)
  }

  removeallcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist)
  }


}
