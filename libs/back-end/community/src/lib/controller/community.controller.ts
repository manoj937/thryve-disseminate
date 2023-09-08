/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommunityService } from '../service/community.service';
import { Community } from '../interface/community.interface';

@Controller('communities')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get()
  async getCommunities() {
    const communities = await this.communityService.getCommunities();
    return communities;
  }

  @Get('search?')
  async findCommunities(
    @Query('keyword') keyValue: string
  ){
    const communities = await this.communityService.searchCommunities(keyValue);
    return communities;
  }

  @Get('community/:id')
  async getCommunity(@Param() community: any) {
    return this.communityService.findCommunity(community.id);
  }

  @Get(':id')
  getCommunityByModerator(@Param() moderator: any) {
    return this.communityService.findCommunityByModerator(moderator.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createModerator(@Body() communityInfo: Community) {
    return this.communityService.addCommunity(communityInfo);
  }

  @Patch('request/:communityId')
  async RequestMemberToCommunity(
    @Param('communityId') communityId: string,
    @Body('moderatorId') moderatorId: string
  ) {
    await this.communityService.requestCommunity(communityId, moderatorId);
    return {
      communityId,
      moderatorId
    };
  }
  
  @Patch('approve/:communityId')
  async ApproveMemberToCommunity(
    @Param('communityId') communityId: string,
    @Body('moderatorId') moderatorId: string
  ) {
    await this.communityService.approveCommunity(communityId, moderatorId);
    return {
      communityId,
      moderatorId
    };
  }

  @Delete('delete/:id')
  async removeCommunity(@Param('id') community: any) {
    await this.communityService.deleteCommunity(community);
    return { communityId: community };
  }
}
