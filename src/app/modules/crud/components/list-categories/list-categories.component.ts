import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  loading = false;

  constructor(private categorySvc: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.loading = true;
    return this.categorySvc.getAllCategoriesSvc().subscribe({
      next: (resp) => {
        this.categories = resp;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  deleteCategory(id: number | string) {
    return this.categorySvc.deleteCategorySvc(id).subscribe((resp) => {
      this.getAllCategories();
    });
  }
}
