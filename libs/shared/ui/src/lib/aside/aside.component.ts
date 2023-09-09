import { Component, Input } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() communityList: any;
  Math = Math;
  sectionContent = [
    {type: "Content type", title: "Community Title", moderators: 65, src: "assets/1.jpg"},
    {type: "Content type", title: "Community Title", moderators: 65, src: "assets/2.jpg"},
    {type: "Content type", title: "Community Title", moderators: 65, src: "assets/1.jpg"}
  ]
  getRandomInt() {
    let c = Math.floor(Math.random() * (4) + 1);
    console.log(c)
    return c;
  }
}
