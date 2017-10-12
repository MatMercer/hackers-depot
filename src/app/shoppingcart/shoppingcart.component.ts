import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from './shoppingcart.service';
import {Product} from '../products/product/product.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  products: Product[] = [];

  constructor(private shopService: ShoppingcartService) {
    this.products = this.shopService.selectedProducts;

    this.shopService.productChangeEvent.subscribe((prod) => {
      this.products = prod;
    });
  }

  ngOnInit() {
  }

  getTotalPrice() {
    let sum = 0;
    for (const prod of this.products) {
      sum += prod.price;
    }

    return sum.toFixed(2);
  }
}
