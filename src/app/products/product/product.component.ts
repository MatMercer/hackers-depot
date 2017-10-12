import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ShoppingcartService} from '../../shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private shopService: ShoppingcartService) {}

  ngOnInit() {
  }

  addProduct(prod: Product) {
    this.shopService.addProduct(prod);
  }

  removeProduct(prod: Product) {
    this.shopService.removeProduct(prod);
  }

}
