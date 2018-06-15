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
import { CategoryComponent } from './home/category/category.component';
import { CanDeactivateGuardService } from './shared/can-deactivate-guard.service';
import { HomeModule } from './home/home.module';





const routes: Routes = [
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
    MatMenuModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    SearchPipe,
    ProductsListComponent,
    CategoryComponent,
  ],
  providers: [ ProductsService, CanDeactivateGuardService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
