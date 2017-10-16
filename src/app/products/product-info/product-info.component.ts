import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product/product.model';
import {sampleProducts} from '../products.component';
import {ShoppingcartService} from '../../shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  product: Product;
  sub: any;

  constructor(private route: ActivatedRoute, private shopService: ShoppingcartService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.product = sampleProducts[+params['id']];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addProduct(prod: Product) {
    this.shopService.addProduct(prod);
  }

  removeProduct(prod: Product) {
    this.shopService.removeProduct(prod);
  }

}
