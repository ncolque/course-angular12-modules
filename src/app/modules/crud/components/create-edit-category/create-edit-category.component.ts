import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-category',
  templateUrl: './create-edit-category.component.html',
  styleUrls: ['./create-edit-category.component.css'],
})
export class CreateEditCategoryComponent implements OnInit {
  formGroupCategory: FormGroup;
  category: ICategory | undefined;
  id = 0;

  constructor(
    private categorySvc: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) {
    this.formGroupCategory = this.formBuilder.group({
      name: ['', [Validators.required]],
      slug: ['', [Validators.required]],
    });

    this.id = Number(this.activedRoute.snapshot.paramMap.get('id'));

    /* this.activedRoute.params.subscribe((params) => {
      this.id = Number(params['id']);
    }); */

    /* const { name, slug } = this.formGroupCategory.value; */
  }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    if (this.id !== 0) {
      this.categorySvc.getCategoryByIdSvc(this.id).subscribe((resp) => {
        this.category = resp;

        this.formGroupCategory.patchValue({
          name: this.category?.name,
          slug: this.category?.slug,
        });
      });
    }
  }

  createEditCategory() {
    if (this.id == 0) {
      this.createCategory();
    } else {
      this.editCategory();
    }
  }

  createCategory() {
    const newCategory: ICategory = {
      name: this.formGroupCategory.get('name')?.value,
      slug: this.formGroupCategory.get('slug')?.value,
      /* created_at: new Date(),
      updated_at: new Date(), */
    };

    this.categorySvc.createCategorySvc(newCategory).subscribe((resp) => {
      this.router.navigate(['/crud']);
    });
  }

  editCategory() {
    const editCategory: ICategory = {
      name: this.formGroupCategory.get('name')?.value,
      slug: this.formGroupCategory.get('slug')?.value,
    };
    editCategory.id = this.category?.id;
    this.categorySvc
      .updateCategorySvc(this.id, editCategory)
      .subscribe((resp) => {
        this.router.navigate(['/crud']);
      });
  }
}
