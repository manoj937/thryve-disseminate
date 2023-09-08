import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommunityDetails } from '../typeorm/CommunityDetails';
import { Like, Repository } from 'typeorm';
import { Community } from '../interface/community.interface';
import { CreateCommunityDto } from '../dto/CreateCommunity.dto';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(CommunityDetails)
    private readonly communityRepository: Repository<CommunityDetails>
  ) {}

  getCommunities() {
    const communities = this.communityRepository.find().then((communities) => {
      return communities.map((community) => ({
        communityId: community.communityId,
        moderatorId: community.moderatorId,
        title: community.title,
        description: community.description,
        moderators: community.moderators.split(',').filter((t) => t.length > 3),
        tags: community.tags.split(',').filter((t) => t.length > 3),
        type: community.type,
        pendingApprovals: community.pendingApprovals
          .split(',')
          .filter((t) => t.length > 3),
        createdOn: community.createdOn,
      }));
    });
    return communities;
  }

  async findCommunity(communityId: string) {
    const communities = await this.getCommunities();
    return communities.filter(
      (community) => community.communityId === communityId
    );
  }

  async findCommunityByModerator(moderatorId: string) {
    const communities = await this.getCommunities();
    return communities.filter((community) =>
      community.moderators.includes(moderatorId)
    );
  }

  setCommunityId(communities: Community[], id: number) {
    const communityId = 'COM' + ('00' + id).slice(-3);
    for (const community of communities) {
      if (community.communityId === communityId) {
        this.setCommunityId(communities, id + 1);
      }
    }
    return communityId;
  }

  async addCommunity(communityInfo: Community) {
    const communities = await this.getCommunities();
    const communityId = this.setCommunityId(communities, communities.length);
    let newCommunity = false;

    const date = new Date();
    const currentDay = String(date.getDate()).padStart(2, '0');
    const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
    const currentYear = date.getFullYear();
    const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    const createCommunityDto: CreateCommunityDto = {
      communityId,
      moderatorId: communityInfo.moderatorId,
      title: communityInfo.title,
      description: communityInfo.description,
      moderators: String(communityInfo.moderators),
      tags: String(communityInfo.tags),
      type: communityInfo.type,
      pendingApprovals: '',
      createdOn: String(currentDate),
    };
    for (const community of communities) {
      if (community.title === communityInfo.title) {
        return {
          status: 'Error',
          message: 'Community already exist',
        };
      } else {
        newCommunity = true;
      }
    }
    if (newCommunity || !communities.length) {
      const addCommunity = this.communityRepository.create(createCommunityDto);
      return this.communityRepository.save(addCommunity);
    } else {
      return 0;
    }
  }

  async findCommunityPendingApprovals(communityId: string) {
    const communities = await this.getCommunities();
    const community = communities.filter(
      (community) => community.communityId === communityId
    );
    return community[0].pendingApprovals;
  }

  async requestCommunity(communityId: string, memberId: string) {
    const approvals = await this.findCommunityPendingApprovals(communityId);
    const pendingApprovals = [...approvals, memberId];
    return this.communityRepository.update(communityId, {
      pendingApprovals: String(pendingApprovals),
    });
  }

  async approveCommunity(communityId: string, memberId: string) {
    const approvals = await this.findCommunityPendingApprovals(communityId);
    const pendingApprovals = approvals.filter((id:string) => id !== memberId);
    return this.communityRepository.update(communityId, {
      pendingApprovals: String(pendingApprovals),
    });
  }

  async deleteCommunity(id: string) {
    const result = this.communityRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find community.');
    }
  }

  async searchCommunities(keyValue: string) {
    return this.communityRepository.find({
      where: {
        title: Like(`%${keyValue}%`),
      },
    });
  }
}
