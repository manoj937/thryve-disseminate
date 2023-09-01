import { Component, OnInit,Input } from '@angular/core';
import * as moment from 'moment/moment';
import * as $ from 'jquery';
import 'bootstrap';
@Component({
  selector: 'thryve-disseminate-community-posts',
  templateUrl: './community-posts.component.html',
  styleUrls: ['./community-posts.component.scss'],
})
export class CommunityPostsComponent implements OnInit {
  todaysDate = new Date();
  yesterday = new Date();
  moment: any = moment;
  @Input() blogsList: any;
  
  ngOnInit(){
   (<any> $('[data-toggle="tooltip"]'))?.tooltip();
    this.yesterday.setDate(this.todaysDate.getDate() - 1);
  }
}
