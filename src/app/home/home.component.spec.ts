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
import { Products } from '../shared/product';
import { Categories } from '../shared/categories';


describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let products: Products;
  let categories: Categories;
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
      expect(item).toContain(products);
    });
  });

  it('categories property should contain Categories interface', ()=>{
    fixture.detectChanges();
    component.categories.forEach((item)=>{
      expect(item).toBeTruthy();
      expect(item).toContain(categories);
    })
  });

  it('newCategories property should contain unique categories', () => {
    fixture.detectChanges();
    expect(component.newCategories).toBeDefined();
    component.newCategories.forEach((item1)=>{
      component.newCategories.forEach((item2)=>{
        expect(item1.name).not.toBe(item2.name);
      })
    })
  })
});
