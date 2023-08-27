import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommunityDetails } from '../typeorm/CommunityDetails';
import { Repository } from 'typeorm';
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
        name: community.name,
        members: community.members.split('"').filter((t) => t.length > 3),
        tags: community.tags.split('"').filter((t) => t.length > 3),
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

  async findCommunityByMember(memberId: string) {
    const communities = await this.getCommunities();
    return communities.filter((community) =>
      community.members.includes(memberId)
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
    const createCommunityDto: CreateCommunityDto = {
      communityId,
      name: communityInfo.name,
      members: String(communityInfo.members),
      tags: String(communityInfo.tags),
    };
    for (const community of communities) {
      if (community.name === communityInfo.name) {
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
    } else { return 0 }
  }
}
