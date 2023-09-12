import { Component, OnInit,Input } from '@angular/core';
import * as moment from 'moment/moment';
import 'bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'thryve-disseminate-community-questions-ui',
  templateUrl: './community-questions.component.html',
  styleUrls: ['./community-questions.component.scss'],
})
export class CommunityQuestionsComponent { 
  todaysDate = new Date();
  yesterday = new Date();
  moment: any = moment;
  @Input() qaList: any;
  Math = Math;
  constructor(private router: Router){}
  ngOnInit(){
    this.yesterday.setDate(this.todaysDate.getDate() - 1);
  }
  routeTo(id: any){
    this.router.navigate(['/community/qa/'+id])
    console.log(id)
  }

}