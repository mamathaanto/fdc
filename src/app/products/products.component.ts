import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productlist:any;
public imagelist:any
public userdata:any=[]
public userid:any=[]
 productid:any=[];
 url="http://192.168.1.43/api/add-to-cart"
ab:any
public value3:any
public b:any


  constructor(private productsservice:ProductsService,private cartservice:CartService,
    private logins:UserService,private http:HttpClient) { }

  ngOnInit(): void {


    let value2=localStorage.getItem('userdetails');
    console.log(value2);
    this.value3=value2;


    this.productsservice.getproduct().subscribe(res=>{
       
      
      
        this.productlist=res.menu;
      
      
        this.imagelist=res.asset_path;
      //  this.productid=this.productlist.id;
      //  console.log('productid',this.productid);
     // console.log(this.productlist);
       
        

   
        
        this.productlist.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price})
        });
    })
 
  }

  onsubmit(productfms:any)
  {


    var formdata=new FormData();
    formdata.append("user_id",productfms.value3);
    formdata.append("product_id",productfms.a)
    
   return this.http.post<any>(this.url,formdata).subscribe(res=>{
    console.log(res);
    console.log('prodctfms',productfms);
   })
   
    
    
  }

  
  

  

  addtocart(item:any){
    this.cartservice.addtocart(item);
    


  }
 





  

}
