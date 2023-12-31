import { Component } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'thryve-disseminate-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {  moment: any = moment;
  sectionContent = [
    {type: "content type", title: "UI/UX Meet up",date:"2023-08-09", moderators: 65, src: "assets/thumb1.jpg"},
    {type: "content type", title: "PEPDO",date:"2023-06-20", moderators: 65, src: "assets/thumb2.jpg"},
    {type: "content type", title: "We Challenge",date:"2023-08-04", moderators: 65, src: "assets/thumb3.jpg"},
    {type: "content type", title: "UI/UX Meet up",date:"2023-08-09", moderators: 65, src: "assets/thumb1.jpg"},
    {type: "content type", title: "PEPDO",date:"2023-06-20", moderators: 65, src: "assets/thumb2.jpg"},
    {type: "content type", title: "We Challenge",date:"2023-08-04", moderators: 65, src: "assets/thumb3.jpg"},
  ];
  contentTotal = this.sectionContent.length -1;
}