import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModeratorDetails } from '../../typeorm/ModeratorDetails';

@Injectable()
export class ModeratorsService {
  constructor(
    @InjectRepository(ModeratorDetails)
    private readonly moderatorRepository: Repository<ModeratorDetails>
  ) {}
  getModerators() {
    const moderators = this.moderatorRepository.find().then((moderators) => {
      return moderators.map((moderator) => ({
        moderatorId: moderator.moderatorId,
        name: moderator.name,
        email: moderator.email,
        userPassword: moderator.userPassword,
        adminPassword: moderator.adminPassword,
        isAdmin: moderator.isAdmin ? true : false,
      }));
    });
    return moderators;
  }

  getModeratorList() {
    const moderators = this.moderatorRepository.find().then((moderators) => {
      return moderators.map((moderator) => ({
        moderatorId: moderator.moderatorId,
        name: moderator.name,
        email: moderator.email,
        isAdmin: moderator.isAdmin ? true : false,
      }));
    });
    return moderators;
  }

  async findModerator(moderatorId: string) {
    let moderator;
    try {
      moderator = this.moderatorRepository.findOneBy({ moderatorId });
    } catch (error) {
      throw new NotFoundException('Could not find moderator.');
    }
    if (!moderator) {
      throw new NotFoundException('Could not find moderator.');
    }
    return moderator;
  }
}
