import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberDetails } from '../../typeorm/MemberDetails';
import { CreateMemberDto } from '../../dto/CreateMember.dto';
import { Register } from '../../interface/register.interface';
import { MembersService } from '../members/members.service';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(MemberDetails)
    private readonly memberRepository: Repository<MemberDetails>,
    private membersService: MembersService
  ) {}

  setMemberId(members: MemberDetails[], id: number){
    const memberId = "MEM"+ ("00" + id).slice(-3);
    for(const member of members){
        if(member.memberId === memberId){
            this.setMemberId(members, id+1);
        }
    }
    return memberId;
  }

  async updateMember(memberId: string, registerUser:  Register){
    const updatedMember = await this.membersService.findMember(memberId);
    if(updatedMember !== null){
        const isAdmin = registerUser.loginas === 'member' ? false : true;
        updatedMember.isAdmin = isAdmin;
        updatedMember.userPassword = !isAdmin ? registerUser.password: updatedMember.userPassword;
        updatedMember.adminPassword = isAdmin ? registerUser.password: updatedMember.adminPassword;
        return this.memberRepository.save(updatedMember);
    } else { return 0 }
  }

  async addMember(registerUser: Register) {
    const members = await this.membersService.getMembers();
    const memberId = this.setMemberId(members, members.length);
    let newUser = false;
    const isAdmin = registerUser.loginas === 'member' ? false : true;
    const createMemberDto: CreateMemberDto = {
        memberId: memberId,
        name: registerUser.name,
        email: registerUser.email,
        userPassword: !isAdmin ? registerUser.password : "",
        isAdmin: isAdmin,
        adminPassword: isAdmin ? registerUser.password : ""
    };

    for(const member of members){
        if(member.email === registerUser.email){
            if(member.isAdmin !== isAdmin){
               return this.updateMember(member.memberId, registerUser);
            } else {
                return {
                    status: "Error",
                    message: "User already exist"
                }
            }
        } else {
            newUser = true;
        }
    }

    if(newUser || !members.length){
        createMemberDto.userPassword = !isAdmin ? registerUser.password : "";
        createMemberDto.adminPassword = isAdmin ? registerUser.password : "";
        const newMember = this.memberRepository.create(createMemberDto);
        return this.memberRepository.save(newMember);
    } else{
        return 0;
    }
  }
}
