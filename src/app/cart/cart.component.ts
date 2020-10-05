import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductService } from '../service/productServices';
import { Product } from '../model/product';
import {Injectable} from '@angular/core';


@Injectable()

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck {

  products:Product[];
  grandTotal:number;
 
  constructor(private productService:ProductService) {
    this.products = this.productService.cart;
    this.grandTotal =0;
    
   }
  
   
    emptyCart(){
      let cartStatus = confirm("Are you sure you want to clear the cart ?");
      if(cartStatus){
        this.products=[];
      }
    
   }
   
  ngDoCheck(): void {
    this.grandTotal=0;
    //console.log(this.products)
    this.products.forEach(element => {
      this.grandTotal += element.price*element.quantity;
      this.productService.total=this.grandTotal;
    });
  }

  ngOnInit(): void {
  }

}