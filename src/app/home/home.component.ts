import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.services/products.services';
import { Products } from '../shared/product';
import { CanComponentDeactivate } from '../shared/can-deactivate-guard.service';
import { Observable } from 'rxjs/index';
import { Categories } from '../shared/categories';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, CanComponentDeactivate {
  public products: Products[];
  public categories;
  public newCategories: Categories[];
  constructor( private productsService: ProductsService) {
    this.categories = [];
    this.newCategories = [];
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.products$.subscribe((products)=>{
      this.products = products;
      this.fetchProductCategory();
      this.categoryFilter();
    })
  }

  fetchProductCategory() {
    this.products.forEach((item) => {
      if (item.bsr_category) {
        this.categories.push(item.bsr_category);
      }
    });
  }

  categoryFilter() {
    const selected = false;
    this.getUnique(this.categories).forEach((name, i)=> {
      let id = i + 1;
      if(name) {
        this.newCategories.push({name, selected, id})
      }
    });
    console.log(this.newCategories)
  }

  getUnique(arr) {
    let obj = {};

    arr.forEach((item)=> {
      if(item) {
        const myString = item;
        obj[myString] = true;
      }
    });
    return Object.keys(obj);
  }

  canDeactivate() : Observable<boolean> | boolean {
    return confirm("Do you want to exit?")
  };

}
