import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product | undefined;

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"])
      {
        this.getProductByCategoryId(params["categoryId"]);
      }
    })

  }

  getProductByCategoryId(categoryId:number) {
    this.productService.getProductByCategoryId(categoryId).subscribe(response=>{
      this.product = response
    })

  }

}
