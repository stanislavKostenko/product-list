import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from '../filter/filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { SearchPipe } from '../pipes/searchPipe';
import { ProductsService } from '../products.services/products.services';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', ()=> {
  let fixture: ComponentFixture<ProductsListComponent>;
  let component: ProductsListComponent;
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ProductsListComponent,
        SearchPipe,
        FilterComponent
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

  beforeEach(()=>{
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', ()=>{
    expect(component).toBeTruthy();
  })
});
