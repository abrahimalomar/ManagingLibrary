import { Component } from '@angular/core';
import { StackOverflowService } from '../../services/stack-overflow.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IQuestionDetailView } from '../../models/ModelView/IQuestionDetailView';
import { TruncatePipe } from '../../Pipes/truncate.pipe';

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [CommonModule,RouterLink,TruncatePipe],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent {
  questions: IQuestionDetailView[] = [];
  isLoading: boolean = false;

  constructor(private stackOverflowService: StackOverflowService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.isLoading = true;
    this.stackOverflowService.getLatestQuestions().subscribe(
      {
        next:(response) => {
          this.questions = response.items;
          this.isLoading = false;
        },error:( error) => {
          console.error('Error fetching questions:', error);
          this.isLoading = false;
        }
      }
    );
  }
}
