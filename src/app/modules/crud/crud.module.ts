import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CreateEditCategoryComponent } from './components/create-edit-category/create-edit-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ListCategoriesComponent,
    CreateEditCategoryComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class CrudModule { }
