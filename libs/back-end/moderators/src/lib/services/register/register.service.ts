import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModeratorDetails } from '../../typeorm/ModeratorDetails';
import { CreateModeratorDto } from '../../dto/CreateModerator.dto';
import { Register } from '../../interface/register.interface';
import { ModeratorsService } from '../moderators/moderators.service';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(ModeratorDetails)
    private readonly moderatorRepository: Repository<ModeratorDetails>,
    private moderatorsService: ModeratorsService
  ) {}

  setModeratorId(moderators: ModeratorDetails[], id: number){
    const moderatorId = "MOD"+ ("00" + id).slice(-3);
    for(const moderator of moderators){
        if(moderator.moderatorId === moderatorId){
            this.setModeratorId(moderators, id+1);
        }
    }
    return moderatorId;
  }

  async updateModerator(moderatorId: string, registerUser:  Register){
    const updatedModerator = await this.moderatorsService.findModerator(moderatorId);
    if(updatedModerator !== null){
        const isAdmin = registerUser.loginas === 'moderator' ? false : true;
        updatedModerator.isAdmin = isAdmin;
        updatedModerator.userPassword = !isAdmin ? registerUser.password: updatedModerator.userPassword;
        updatedModerator.adminPassword = isAdmin ? registerUser.password: updatedModerator.adminPassword;
        return this.moderatorRepository.save(updatedModerator);
    } else { return 0 }
  }

  async addModerator(registerUser: Register) {
    const moderators = await this.moderatorsService.getModerators();
    const moderatorId = this.setModeratorId(moderators, moderators.length);
    let newUser = false;
    const isAdmin = registerUser.loginas === 'moderator' ? false : true;
    const createModeratorDto: CreateModeratorDto = {
        moderatorId: moderatorId,
        name: registerUser.name,
        email: registerUser.email,
        userPassword: !isAdmin ? registerUser.password : "",
        isAdmin: isAdmin,
        adminPassword: isAdmin ? registerUser.password : ""
    };

    for(const moderator of moderators){
        if(moderator.email === registerUser.email){
            if(moderator.isAdmin !== isAdmin){
               return this.updateModerator(moderator.moderatorId, registerUser);
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

    if(newUser || !moderators.length){
        createModeratorDto.userPassword = !isAdmin ? registerUser.password : "";
        createModeratorDto.adminPassword = isAdmin ? registerUser.password : "";
        const newModerator = this.moderatorRepository.create(createModeratorDto);
        return this.moderatorRepository.save(newModerator);
    } else{
        return 0;
    }
  }
}
