import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, VirtualTimeScheduler } from 'rxjs';
import { AddcartapiService } from '../addcartapi.service';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandtotal !:number;
  public pr:any;

  cartdata:any;



  public value3:any;
  url="http://192.168.1.43/api/get-cart";

 cartdelurl="http://192.168.1.43/api/delete-item-from-cart";
  public cartitems:any
  public image:any

  public deletelist:any=[]
  public list=new BehaviorSubject<any>([]);

  constructor(private cartservice:CartService,private productservice:ProductsService,private addcartapi:AddcartapiService,
    private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.cartservice.getproducts().subscribe(res=>{
        this.products=res;
       this.productservice.getproduct().subscribe(result=>{
        this.pr=result.asset_path;
        this.grandtotal=this.cartservice.gettotalprice();

       
        
      

       });
        console.log('prod',this.products);
        console.log('pr',this.pr);


        let value2=localStorage.getItem('userdetails');
        console.log(value2);
        this.value3=value2;





        // this.addcartapi.addtocart().subscribe(res=>{
        //   this.cartdata=res
       // })
        
    })
  }

  onsubmit(cartform:any){
    var formdata=new FormData();
    formdata.append("user_id",cartform.value3);
    return this.http.post<any>(this.url,formdata).subscribe(res=>{
      this.cartitems=res.cart_items;
      this.image=res.asset_path;
      this.grandtotal=this.cartservice.gettotalprice();

      this.cartitems.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }


  add(item: { quantity: any; }){
    item.quantity +=1
    this.grandtotal=this.cartservice.gettotalprice();
  }
  dec(item: { quantity: number; }){
    if(item.quantity!=1){
    item.quantity -=1;
    this.grandtotal=this.cartservice.gettotalprice();
  }
  }

  remove(del:any){
    var formdata=new FormData();
    formdata.append("user_id",del.value3);
    formdata.append("cart_id",del.b);
    return this.http.post<any>(this.cartdelurl,formdata).subscribe(res=>{
     this. deletelist=res;
     console.log(this.deletelist);
     this.deletelist.map((c:any,index:any)=>{
      if(del.b===c.id){
      this.deletelist.splice(index,1);
       console.log(this.deletelist);
      }
    })
     this.list.next(this.deletelist);
    

    })
     
   this.reload();
   
  }

reload(){
  this.route.navigate(['/cart']);
}



  


 // emptycart(){
  //  this.cartservice.removeallcart()
 // }

 

}
