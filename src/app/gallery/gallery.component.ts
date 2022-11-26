import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private product:ProductsService) { }
  productlist:any=[]
  imagelist:any
  ngOnInit(): void {
    this.product.getproduct().subscribe(res=>{
      this.productlist=res.menu;
      this.imagelist=res.asset_path;
    })
  }

}
