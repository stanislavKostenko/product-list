import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { FilterComponent } from '../filter/filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { ProductsListComponent } from '../products-list/products-list.component';
import { SearchPipe } from '../pipes/searchPipe';
import { ProductsService } from '../products.services/products.services';
import { HttpClientModule } from '@angular/common/http';


describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let productsService: ProductsService;
  let spy: jasmine.Spy;
  let mockProducts = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CategoryComponent,
        FilterComponent,
        ProductsListComponent,
        SearchPipe
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        MatFormFieldModule,
        HttpClientModule
      ],
      providers: [ProductsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    productsService = fixture.debugElement.injector.get(ProductsService);
    spy = spyOn(productsService, 'products$').and.returnValue(mockProducts);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('products property should be defined', () => {
    fixture.detectChanges();
    expect(component.products).toBeDefined()
  });

  it('products property should contain Products interface', () => {
    fixture.detectChanges();
    component.products.forEach((item)=>{
      expect(item).toBeTruthy();
    });
  });

  it('should call ProductsService', () => {
    fixture.detectChanges();
    component.getProducts();
    expect(spy.calls.any).toBeTruthy();
  });

  it('should set products', () => {
    fixture.detectChanges();
    component.getProducts();
    expect(component.products).toEqual(mockProducts);
  });
});
