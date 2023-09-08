import { Component } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-community-widget',
  templateUrl: './community-widget.component.html',
  styleUrls: ['./community-widget.component.scss'],
})
export class CommunityWidgetComponent {
  sectionContent = [
    {type: "content type", title: "Community Title", moderators: 65, src: "assets/thumb1.jpg"},
    {type: "content type", title: "Community Title", moderators: 65, src: "assets/thumb2.jpg"},
    {type: "content type", title: "Community Title", moderators: 65, src: "assets/thumb3.jpg"}
  ]
}
