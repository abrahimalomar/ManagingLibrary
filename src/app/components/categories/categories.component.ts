import { Component, OnDestroy } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IMainCategory } from '../../models/ModelView/IMainCategory';
import { ISubCategory } from '../../models/ModelView/ISubCategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnDestroy {

  subscription!: Subscription;
  BookAddForm!: FormGroup;
  mainCategories: IMainCategory[] = []
  subCategories: ISubCategory[] = []
  constructor(private categoriesService: CategoriesService,
    private formBuilder: FormBuilder) {
    this.getAllCategories();
    this.initForm();
  }

  initForm() {
    this.BookAddForm = this.formBuilder.group({
      mainCategory: ['', Validators.required],
      subCategory: ['', Validators.required]
    })
  }

  getAllCategories() {
    this.subscription = this.categoriesService.getAll().subscribe({
      next: (response) => {
        this.mainCategories = response
      },
      error: (error) => {
        console.log('error');

      }
    })
  }



  onSelectCategory(): void {
    const selectedmainCategoryId: number = this.BookAddForm.get('mainCategory')?.value;
    this.getAllSubCategories(selectedmainCategoryId);

  }
  getAllSubCategories(Id: number): void {
    this.categoriesService.getSubCategories(Id).subscribe({
      next: (response) => {
        this.subCategories = response

      },
      error: (error) => {
        console.log('errors', error);
      }
    });
  }

  Add() {

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
