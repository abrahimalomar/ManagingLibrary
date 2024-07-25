import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

export const routes: Routes = 
[
    { path: '', redirectTo: '', pathMatch: 'full' },
    {path:'categories',component:CategoriesComponent},
    {path:'listquestions',component:QuestionsListComponent},
    {path:'questionDetails/:id',component:QuestionDetailComponent},
    { path: '**', redirectTo: '' },
];

