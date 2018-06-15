import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.services/products.services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() public newCategories;
  public searchParam: string = '';
  public classState: boolean = true;
  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.fetchLocalStorage();
  }

  fetchLocalStorage() {
    this.productService.searchText = localStorage.getItem('value');
    this.searchParam = this.productService.searchText;
  }

  toggle() {
    this.classState = !this.classState;
  }
}
