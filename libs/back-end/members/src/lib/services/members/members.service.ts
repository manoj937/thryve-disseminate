import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberDetails } from '../../typeorm/MemberDetails';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberDetails)
    private readonly memberRepository: Repository<MemberDetails>
  ) {}
  getMembers() {
    const members = this.memberRepository.find().then((members) => {
      return members.map((member) => ({
        memberId: member.memberId,
        name: member.name,
        email: member.email,
        userPassword: member.userPassword,
        adminPassword: member.adminPassword,
        isAdmin: member.isAdmin ? true : false,
      }));
    });
    return members;
  }

  async findMember(memberId: string) {
    let member;
    try {
      member = this.memberRepository.findOneBy({ memberId });
    } catch (error) {
      throw new NotFoundException('Could not find member.');
    }
    if (!member) {
      throw new NotFoundException('Could not find member.');
    }
    return member;
  }
}
