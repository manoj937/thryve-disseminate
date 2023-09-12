import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';
@Component({
  selector: 'thryve-disseminate-blog-detail-ui',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  todaysDate = new Date();
  yesterday = new Date();
  moment: any = moment;
  Math = Math;
  constructor(private router: Router){
    
  }
  ngOnInit(){
    this.yesterday.setDate(this.todaysDate.getDate() - 1);
  }
}
