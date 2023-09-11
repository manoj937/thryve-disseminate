import { Component } from '@angular/core';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';
import { Router } from '@angular/router';
import { QaFacade } from '@thryve-disseminate/qa/data-access';

@Component({
  selector: 'thryve-disseminate-community-questions',
  templateUrl: './community-questions.component.html',
  styleUrls: ['./community-questions.component.scss'],
})
export class CommunityQuestionsComponent {
  moderatorId = sessionStorage.getItem('moderatorId');
  searchKey = sessionStorage.getItem('searchKey') || '';
  constructor(public qaDetails: QaFacade, private router: Router){
    if(this.router.url.split('/').includes('qa/')){
      this.qaDetails.initLoadQaByModeratorId(String(this.moderatorId));
    } else{
      if(!!this.searchKey){
        this.qaDetails.initLoadSearchQa(this.searchKey)
      } else {
        this.qaDetails.initLoadQa();
      }
    }
  }
}
