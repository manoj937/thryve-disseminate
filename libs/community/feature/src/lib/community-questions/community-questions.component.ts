import { Component, OnInit,Input } from '@angular/core';
import * as moment from 'moment/moment';
import 'bootstrap';
@Component({
  selector: 'thryve-disseminate-community-questions',
  templateUrl: './community-questions.component.html',
  styleUrls: ['./community-questions.component.scss'],
})
export class CommunityQuestionsComponent { todaysDate = new Date();
  yesterday = new Date();
  moment: any = moment;
  @Input() blogsList: any;
  
  ngOnInit(){
    this.yesterday.setDate(this.todaysDate.getDate() - 1);
  }

}