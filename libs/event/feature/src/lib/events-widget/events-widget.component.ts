import { Component } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'thryve-disseminate-events-widget',
  templateUrl: './events-widget.component.html',
  styleUrls: ['./events-widget.component.scss'],
})
export class EventsWidgetComponent {
  moment: any = moment;
  sectionContent = [
    {type: "content type", title: "UI/UX Meet up",date:"2023-08-09", members: 65, src: "assets/thumb1.jpg"},
    {type: "content type", title: "PEPDO",date:"2023-06-20", members: 65, src: "assets/thumb2.jpg"},
    {type: "content type", title: "We Challenge",date:"2023-08-04", members: 65, src: "assets/thumb3.jpg"}
  ]
}
