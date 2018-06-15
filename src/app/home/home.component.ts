import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.services/products.services';
import { Products } from '../shared/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Products[];
  public searchText = '';
  public categories;
  public newCategories;
  constructor( private productsService: ProductsService) {
    this.categories = [];
    this.newCategories = [];
  }

  ngOnInit() {
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
}