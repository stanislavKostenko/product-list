import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.services';
import { HttpClientModule } from '@angular/common/http';
import { Products } from '../shared/product';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let products: Products[] = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProductsService]
    });
  });

  it('should create service', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));

  it('should make response', inject([ProductsService, HttpTestingController], (service: ProductsService, backend: HttpTestingController ) => {
    service.products$.subscribe((product)=>{
      expect(product).toEqual(products);
    });

    backend.expectOne({
      method: 'GET',
      url: '../../assets/products-list.json'
    }).flush(products);
  }));
});
