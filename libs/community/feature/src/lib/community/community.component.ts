/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';
import { CommunityFacade } from '@thryve-disseminate/community/data-access';

@Component({
  selector: 'thryve-disseminate-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  constructor(
    public communityDetails: CommunityFacade,
    public blogsDetails: BlogsFacade
  ) {}

  admin!: string | null;

  ngOnInit() {
    this.admin = sessionStorage.getItem('admin');
    this.communityDetails.initLoadCommunities();
    if (this.admin !== 'true') {
      !sessionStorage.getItem('searchKey') && this.blogsDetails.initLoadBlogs();
    }
  }

  deleteCommunity(id: string) {
    this.communityDetails.initCommunityDeletion(id);
  }

  addCommunity(community: any) {
    community.moderatorId = sessionStorage.getItem('moderatorId');
    community.moderators = community.moderators.split(",");
    this.communityDetails.initCommunityCreation(community);
  }
}
