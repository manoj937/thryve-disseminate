import { Component } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  sectionContent = [
    {type: "content type", title: "Community Title", members: 65, src: "assets/1.jpg"},
    {type: "content type", title: "Community Title", members: 65, src: "assets/2.jpg"},
    {type: "content type", title: "Community Title", members: 65, src: "assets/1.jpg"}
  ]
}
