import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.staging';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { IMainCategory } from '../models/ModelView/IMainCategory';
import { ISubCategory } from '../models/ModelView/ISubCategory';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient,
              private handleErrorService:HandleErrorService) { }


  getAll(): Observable<IMainCategory[]> {

    return this.http.get<IMainCategory[]>(`${this.apiUrl}/MainCategoriesFromEF`).pipe(
      catchError(this.handleErrorService.handleError)
    );
  }
  getSubCategories(mainCategoryId: number): Observable<ISubCategory[]> {
    return this.http.get<ISubCategory[]>(`${this.apiUrl}/MainCategoriesFromEF/subcategories/${mainCategoryId}`).pipe(
      catchError(this.handleErrorService.handleError)
    );
  }
}
