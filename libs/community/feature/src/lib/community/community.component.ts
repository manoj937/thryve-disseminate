import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'thryve-disseminate-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
constructor(public communityService: CommunityService){}
ngOnInit(): void {
  this.communityService.getCommunityList();
  this.communityService.getBlogList();
}
}
