import { Component, OnInit } from '@angular/core';
import {Product} from '../products/product/product.model';
import {sampleProducts} from '../products/products.component';
import {ShoppingcartService} from '../shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-product-cart-list',
  templateUrl: './product-cart-list.component.html',
  styleUrls: ['./product-cart-list.component.css']
})
export class ProductCartListComponent implements OnInit {
  products: Product[] = sampleProducts;

  constructor(public shopService: ShoppingcartService) { }

  ngOnInit() {
  }

}
