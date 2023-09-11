import { Component, OnInit } from '@angular/core';
import { QaFacade } from '@thryve-disseminate/qa/data-access';
import * as moment from 'moment/moment';
@Component({
  selector: 'thryve-disseminate-qa-detail',
  templateUrl: './qa-detail.component.html',
  styleUrls: ['./qa-detail.component.scss'],
})
export class QaDetailComponent {
  moment: any = moment;
  todaysDate = new Date();
  constructor(public qaDetails: QaFacade){
    this.qaDetails.initLoadQaById('QA000');
  }
}
