import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskCommunityComponent } from './ask-community/ask-community.component';
import { CommunityQuestionsComponent } from './community-questions/community-questions.component';
import { QaUiModule } from '@thryve-disseminate/qa/ui';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';

@NgModule({
  imports: [CommonModule, QaUiModule],
  declarations: [AskCommunityComponent, CommunityQuestionsComponent],
  exports: [AskCommunityComponent, CommunityQuestionsComponent],
  providers: [BlogsFacade]
})
export class QaFeatureModule {}
