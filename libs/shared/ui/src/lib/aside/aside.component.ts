import { Component } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  sectionContent = [
    {type: "Content type", title: "Community Title", members: 65, src: "assets/1.jpg"},
    {type: "Content type", title: "Community Title", members: 65, src: "assets/2.jpg"},
    {type: "Content type", title: "Community Title", members: 65, src: "assets/1.jpg"}
  ]
}
