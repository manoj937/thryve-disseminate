import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeratorDetails } from '../../typeorm/ModeratorDetails';
import { Repository } from 'typeorm';
import { Login, ResetPassword } from '../../interface/login.interface';
import { ModeratorsService } from '../moderators/moderators.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(ModeratorDetails)
    private readonly moderatorRepository: Repository<ModeratorDetails>,
    private moderatorsService: ModeratorsService
  ) {}

  async validateModerator(loginInfo: Login) {
    const moderators = await this.moderatorsService.getModerators();
    let validUser = false;
    let moderatorInfo;
    for (const moderator of moderators) {
        if(moderator.email === loginInfo.email){
            if(loginInfo.isAdmin){
                if(moderator.adminPassword === loginInfo.password){
                    validUser = true ; 
                    moderatorInfo = moderator;
                } 
            } else{
                if( moderator.userPassword === loginInfo.password){
                    validUser = true ; 
                    moderatorInfo = moderator;
                }
            }
        }
    }
    if (!validUser) {
      throw new NotFoundException(`User not found.`);
    }
    return {
      status: "success", 
      message: "Login successfully", 
      data: { 
        moderatorId: moderatorInfo?.moderatorId 
      } 
    }
  }

  async forgetPassword(loginInfo: Login) {
    const moderators = await this.moderatorsService.getModerators();
    let validUser = false;
    let moderatorInfo;
    for (const moderator of moderators) {
      if(moderator.email === loginInfo.email){
        validUser = true;
        moderatorInfo = moderator;
      }
    }
    return validUser ? 
    { status: "success", message: "User Exist", data: { moderatorId: moderatorInfo?.moderatorId } } : 
    { status: "Error", message: "User not found" };
  }

  async resetPassword(loginInfo: ResetPassword) { 
    const updatedModerator = await this.moderatorsService.findModerator(loginInfo.moderatorId);
    if(updatedModerator) {
        loginInfo.isAdmin ? updatedModerator.adminPassword = loginInfo.password : updatedModerator.userPassword = loginInfo.password;
        this.moderatorRepository.save(updatedModerator);
        return { status: "success", message: "Password updated successfully", data: { moderatorId: updatedModerator.moderatorId ,password: loginInfo.password }}
    } else {
        return 0;
    }
  }
}
