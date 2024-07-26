import { Component, OnDestroy } from '@angular/core';
import { StackOverflowService } from '../../services/stack-overflow.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IQuestionDetailView } from '../../models/ModelView/IQuestionDetailView';
import { TruncatePipe } from '../../Pipes/truncate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TruncatePipe],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent implements OnDestroy {
  questions: IQuestionDetailView[] = [];
  isLoading: boolean = false;
  subscription!: Subscription;


  constructor(private stackOverflowService: StackOverflowService) { }
 

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions(): void {
    this.isLoading = true;
  this.subscription=  this.stackOverflowService.getLatestQuestions().subscribe(
      {
        next: (response) => {
          this.questions = response.items;
          this.isLoading = false;
        }, error: (error) => {
          console.error('Error fetching questions:', error);
          this.isLoading = false;
        }
      }
    );
  }
  ngOnDestroy(): void {

      this.subscription.unsubscribe();
    
  }
}
