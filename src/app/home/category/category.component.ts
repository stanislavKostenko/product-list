import { Component, OnInit} from '@angular/core';
import { Products } from '../../shared/product';
import { ProductsService } from '../../products.services/products.services';
import { Subscription } from 'rxjs/index';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  public name: string;
  public subscription: Subscription;
  public querySubscription: Subscription;
  public products: Products[];
  public categories: Products[];
  public searchText: string = '';
  public searchParam: string;

  constructor(private productsService: ProductsService, private activateRoute: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit() {
    this.querySubscription = this.activateRoute.queryParams.subscribe((queryParams)=>{
      this.searchParam = queryParams[this.productsService.searchText];
    });

    this.subscription = this.activateRoute.params.subscribe( params => {
      this.name = params['name'];
      console.log(this.name);
      this.getCategories(this.name);
      this.fetchLocalStorage();
    });
  }


  getCategories(name) {
    this.categories = [];
    this.productsService.products$.subscribe((value)=>{
      this.products = value;
      if(name !== 'all') {
        this.products.forEach((category)=>{
          if(category.bsr_category.includes(name)){
            this.categories.push(category)
          }
        });
        this.products = this.categories;
        console.log(this.products);
      } else if (name === 'all') {
        this.products = value;
      }
    });
  }

  toLocalStorageValue() {
    this.productsService.toLocalStorage(this.searchText);
  }

  fetchLocalStorage() {
    this.productsService.searchText = localStorage.getItem('value');
    this.searchText = this.productsService.searchText
  }

}
