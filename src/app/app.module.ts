import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule, MatMenuModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SearchPipe } from './pipes/searchPipe';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.services/products.services';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';



const categoryChildrenRoute: Routes = [
  {path: ':name', component: CategoryComponent},
  {path: 'all', component: CategoryComponent},
];

const routes: Routes = [
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'categories', component: HomeComponent, children: categoryChildrenRoute },
  {path: '', redirectTo: 'categories/all', pathMatch: 'full'},

];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: [
    AppComponent,
    SearchPipe,
    ProductsListComponent,
    FilterComponent,
    HomeComponent,
    CategoryComponent,
  ],
  providers: [ ProductsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
