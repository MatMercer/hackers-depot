import { Component, OnInit } from '@angular/core';
import {Product} from './product/product.model';

export const sampleProducts: Product[] = [
  {
    name: 'Lear Siegler ADM 3A',
    desc: 'The ADM-3A was one of the first video display terminals. First shipped in 1976.',
    imageName: 'adm3.jpg',
    price: 3234.42
  }
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
