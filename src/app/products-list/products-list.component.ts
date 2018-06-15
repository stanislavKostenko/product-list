import { Component, OnInit, Input } from '@angular/core';


import { Products } from '../shared/product';



@Component({
  selector: 'app-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})

export class ProductsListComponent implements OnInit {
  @Input() public searchText = '';
  @Input() public products: Products[];

  constructor() {
  }

  ngOnInit() {

  }

}

