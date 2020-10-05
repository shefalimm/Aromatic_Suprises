import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/productServices';
import { Product } from '../model/product';


@Component({
  selector: 'app-zodiac',
  templateUrl: './zodiac.component.html',
  styleUrls: ['./zodiac.component.css']
})
export class ZodiacComponent implements OnInit {
  products:Product[];

  constructor(private productService:ProductService)
  {
   this.products = this.productService.getProducts();
  }

  buy(id){
    let product = this.productService.getProduct(id);
    let myProduct = new Product();
    myProduct.id = product.id;
    myProduct.name = product.name;
    myProduct.price = product.price;
    myProduct.img = product.img;
    myProduct.quantity = 1;
    this.productService.addToCart(myProduct);
    alert(" One Zodiac candle added to cart!!!");
    
  }

  
  ngOnInit(): void {
  }

}
