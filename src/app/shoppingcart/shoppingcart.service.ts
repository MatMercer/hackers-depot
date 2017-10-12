import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Product} from '../products/product/product.model';
import {Subject} from 'rxjs/Subject';
import {sampleProducts} from '../products/products.component';

@Injectable()
export class ShoppingcartService {
  // Selected products
  private _selectedProducts = [];

  private _productChangeEvent: Subject<Product[]>;

  get selectedProducts(): Product[] {
    return this._selectedProducts;
  }

  get productChangeEvent(): Subject<Product[]> {
    return this._productChangeEvent;
  }

  constructor(
    private cookieService: CookieService
  ) {
    this._productChangeEvent = new Subject<Product[]>();

    // Checks if there is a product list and sync it
    if (cookieService.check('sel-prods')) {
      this.getProductsFromCookie();
    } else {
      this.saveCookies();
    }
  }

  private getProductsFromCookie() {
    const json = this.cookieService.get('sel-prods');
    const prodIdArray = JSON.parse(json);

    for (const id of prodIdArray) {
      const foundProduct = sampleProducts.find(
        prod => prod.id === +id
      );
      this._selectedProducts.push(foundProduct);
    }
  }

  private saveCookies() {
    const json = JSON.stringify(this._selectedProducts.map(prod => {
      return prod.id;
    }));
    this.cookieService.set('sel-prods', json);
  }

  public addProduct(product: Product) {
    this._selectedProducts.push(product);
    this.saveCookies();

    this._productChangeEvent.next(this._selectedProducts);
  }

  public removeProduct(product: Product) {
    const idx = this._selectedProducts.indexOf(product);

    if (idx >= 0) {
      this._selectedProducts.splice(idx, 1);
      this.saveCookies();

      this._productChangeEvent.next(this._selectedProducts);
    }
  }
}

