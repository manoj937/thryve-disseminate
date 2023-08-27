import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberDetails } from '../../typeorm/MemberDetails';
import { Repository } from 'typeorm';
import { Login, ResetPassword } from '../../interface/login.interface';
import { MembersService } from '../members/members.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(MemberDetails)
    private readonly memberRepository: Repository<MemberDetails>,
    private membersService: MembersService
  ) {}

  async validateMember(loginInfo: Login) {
    const members = await this.membersService.getMembers();
    let validUser = false;
    let memberInfo;
    for (const member of members) {
        if(member.email === loginInfo.email){
            if(loginInfo.isAdmin){
                if(member.adminPassword === loginInfo.password){
                    validUser = true ; 
                    memberInfo = member;
                } 
            } else{
                if( member.userPassword === loginInfo.password){
                    validUser = true ; 
                    memberInfo = member;
                }
            }
        }
    }
    return validUser ? 
    { status: "success", message: "Login successfully", data: { memberId: memberInfo?.memberId } } : 
    { status: "Error", message: "User not found" };
  }

  async forgetPassword(loginInfo: Login) {
    const members = await this.membersService.getMembers();
    let validUser = false;
    let memberInfo;
    for (const member of members) {
      if(member.email === loginInfo.email){
        validUser = true;
        memberInfo = member;
      }
    }
    return validUser ? 
    { status: "success", message: "User Exist", data: { memberId: memberInfo?.memberId } } : 
    { status: "Error", message: "User not found" };
  }

  async resetPassword(loginInfo: ResetPassword) { 
    const updatedMember = await this.membersService.findMember(loginInfo.memberId);
    if(updatedMember) {
        loginInfo.isAdmin ? updatedMember.adminPassword = loginInfo.password : updatedMember.userPassword = loginInfo.password;
        this.memberRepository.save(updatedMember);
        return { status: "success", message: "Password updated successfully", data: { memberId: updatedMember.memberId ,password: loginInfo.password }}
    } else {
        return 0;
    }
  }
}
