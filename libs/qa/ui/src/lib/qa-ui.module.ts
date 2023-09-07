import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityQuestionsComponent } from './community-questions/community-questions.component';
import { AskCommunityComponent } from './ask-community/ask-community.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CommunityQuestionsComponent, AskCommunityComponent],
  exports: [CommunityQuestionsComponent, AskCommunityComponent]
})
export class QaUiModule {}
