import { Component, OnInit } from '@angular/core';
import {Product} from "../products/product/product.model";
import {sampleProducts} from "../products/products.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeProduct: Product = sampleProducts[0];

  constructor() { }

  ngOnInit() {
  }

}
