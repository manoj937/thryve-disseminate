import { Component } from '@angular/core';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';

@Component({
  selector: 'thryve-disseminate-community-questions',
  templateUrl: './community-questions.component.html',
  styleUrls: ['./community-questions.component.scss'],
})
export class CommunityQuestionsComponent {
  constructor(public blogsDetails: BlogsFacade){}
}
