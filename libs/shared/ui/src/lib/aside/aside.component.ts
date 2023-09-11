import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnChanges {
  @Input() communityList: any;
  Math = Math;
  sectionContent = [
    {type: "Content type", title: "Community Title", moderators: 65, src: "assets/1.jpg"},
    {type: "Content type", title: "Community Title", moderators: 65, src: "assets/2.jpg"},
    {type: "Content type", title: "Community Title", moderators: 65, src: "assets/1.jpg"}
  ];
  constructor(){
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    changes['communityList'].currentValue.forEach((value: any,i: any) => {
      this.communityList[i] = {...this.communityList[i], joinCommunity: Boolean(Math.random() < 0.8)}
      // value.joinCommunity = true;
      // value
    });
    console.log(this.communityList)
  }

  join(index: number){
    this.communityList[index].joinCommunity = false;
  }
}
