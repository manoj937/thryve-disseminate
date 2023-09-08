import { Module } from '@nestjs/common';
import { ModeratorDetails } from './lib/typeorm/ModeratorDetails';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './lib/controller/login/login.controller';
import { RegisterController } from './lib/controller/register/register.controller';
import { LoginService } from './lib/services/login/login.service';
import { RegisterService } from './lib/services/register/register.service';
import { ModeratorsService } from './lib/services/moderators/moderators.service';
import { ModeratorsController } from './lib/controller/moderators/moderators.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModeratorDetails])],
  controllers: [LoginController, RegisterController, ModeratorsController],
  providers: [LoginService, RegisterService, ModeratorsService],
  exports: [],
})
export class ModeratorsModule {}
