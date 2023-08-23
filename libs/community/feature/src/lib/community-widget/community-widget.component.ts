import { Component } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-community-widget',
  templateUrl: './community-widget.component.html',
  styleUrls: ['./community-widget.component.scss'],
})
export class CommunityWidgetComponent {
  sectionContent = [
    {type: "content type", title: "Community Title", members: 65},
    {type: "content type", title: "Community Title", members: 65},
    {type: "content type", title: "Community Title", members: 65}
  ]
}
