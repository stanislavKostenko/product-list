import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.services';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductsService]
    });
  });

  it('should be create service', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
