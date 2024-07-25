import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IStackOverflowResponse } from '../models/ModelView/IStackOverflowResponse';

@Injectable({
  providedIn: 'root'
})
export class StackOverflowService {


  private apiUrl = 'https://api.stackexchange.com/2.3/';

  constructor(private http: HttpClient) { }

  getLatestQuestions(): Observable<any> {
    const params = new HttpParams()
      .set('order', 'desc')
      .set('sort', 'activity')
      .set('site', 'stackoverflow')
      .set('pagesize', '50');
    

    return this.http.get<any>(`${this.apiUrl}questions`, { params });
  }

  getQuestionDetails(questionId: number): Observable<IStackOverflowResponse> {
    const params = new HttpParams()
      .set('order', 'desc')
      .set('sort', 'activity')
      .set('site', 'stackoverflow')
      .set('filter', 'withbody');

    return this.http.get<IStackOverflowResponse>(`${this.apiUrl}questions/${questionId}`, { params });
  }
}
