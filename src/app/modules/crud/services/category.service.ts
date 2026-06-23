import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {}

  getAllCategoriesSvc(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.urlApi}/category`);
  }

  getCategoryByIdSvc(id: number | string): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.urlApi}/category/${id}`);
  }

  deleteCategorySvc(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/category/${id}`);
  }

  createCategorySvc(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.urlApi}/category`, category);
  }

  updateCategorySvc(
    id: number | string,
    updateCategory: ICategory,
  ): Observable<void> {
    return this.http.put<void>(`${this.urlApi}/category/${id}`, updateCategory);
  }
}
