import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { HomeComponent } from './home.component';
import { CanDeactivateGuardService } from '../shared/can-deactivate-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const categoryChildrenRoute: Routes = [
  {path: ':name', component: CategoryComponent},
  {path: 'all', component: CategoryComponent},
];

const routes: Routes = [
  {
    path: 'categories',
    component: HomeComponent,
    children: categoryChildrenRoute,
    canDeactivate: [CanDeactivateGuardService]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, FilterComponent],
  exports: [HomeComponent, FilterComponent]
})
export class HomeModule { }

