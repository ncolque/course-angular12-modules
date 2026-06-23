import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CreateEditCategoryComponent } from './components/create-edit-category/create-edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoriesComponent,
  },
  {
    path: 'create-category',
    component: CreateEditCategoryComponent,
  },
  {
    path: 'edit-category/:id',
    component: CreateEditCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
