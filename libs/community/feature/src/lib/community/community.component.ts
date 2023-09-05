import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';

@Component({
  selector: 'thryve-disseminate-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
constructor(public communityService: CommunityService){}
admin!: string | null;
async ngOnInit() {
  this.admin = sessionStorage.getItem('admin');
  if(this.admin === 'true'){
    this.communityService.getCommunityList();
  } else if(this.admin === 'false') {
    this.communityService.getCommunityList();
    this.communityService.getBlogList();
  }
}

deleteCommunity(id: string){
  this.communityService.deleteCommunity(id);
}
}
