import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
@Component({
  selector: 'thryve-disseminate-community-posts',
  templateUrl: './community-posts.component.html',
  styleUrls: ['./community-posts.component.scss'],
})
export class CommunityPostsComponent implements OnInit {
  todaysDate = new Date();
  yesterday = new Date();
  moment: any = moment;
  ngOnInit(){
    this.yesterday.setDate(this.todaysDate.getDate() - 1);
  }
}
