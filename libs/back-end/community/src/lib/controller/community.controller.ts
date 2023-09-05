/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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

  @Get('community/:id')
  async getCommunity(@Param() community: any) {
    return this.communityService.findCommunity(community.id);
  }

  @Get(':id')
  getCommunityByMember(@Param() member: any) {
    return this.communityService.findCommunityByMember(member.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createMember(@Body() communityInfo: Community) {
    return this.communityService.addCommunity(communityInfo);
  }

  @Delete('delete/:id')
  async removeEmployee(@Param('id') community: any) {
    await this.communityService.deleteCommunity(community);
    return community;
  }
}
