import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css']
})
export class H1Component implements OnInit {
public totalitem:number=0
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getproducts().subscribe(res=>{
      this.totalitem=res.length;
    })
  }

  

}
