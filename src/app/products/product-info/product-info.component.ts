import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from "../product/product.model";
import {sampleProducts} from "../products.component";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  protected product: Product;
  protected sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.product = sampleProducts[+params['id']];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
