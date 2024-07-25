import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StackOverflowService } from '../../services/stack-overflow.service';

import { CommonModule } from '@angular/common';
import { IQuestionDetailView } from '../../models/ModelView/IQuestionDetailView';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.css'
})
export class QuestionDetailComponent {
  question!:IQuestionDetailView  ;

  constructor(
    private route: ActivatedRoute,
    private stackOverflowService: StackOverflowService
  ) { }


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const questionId = +params['id'];
      if (questionId) {
              this.loadQuestionDetails(questionId);
            }
    });

    
  }
  loadQuestionDetails(questionId: number): void {
    this.stackOverflowService.getQuestionDetails(questionId).subscribe(response => {
      this.question = response.items[0];
      
    }, error => {
      console.error('Error fetching question details:', error);
    });
  }
}
