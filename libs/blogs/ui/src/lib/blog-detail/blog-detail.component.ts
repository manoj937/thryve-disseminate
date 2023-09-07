import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
@Component({
  selector: 'thryve-disseminate-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  todaysDate = new Date();
  yesterday = new Date();
  moment: any = moment;
  ngOnInit(){
    this.yesterday.setDate(this.todaysDate.getDate() - 1);
  }
}
