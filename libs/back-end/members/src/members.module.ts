import { Module } from '@nestjs/common';
import { MemberDetails } from './lib/typeorm/MemberDetails';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './lib/controller/login/login.controller';
import { RegisterController } from './lib/controller/register/register.controller';
import { LoginService } from './lib/services/login/login.service';
import { RegisterService } from './lib/services/register/register.service';
import { MembersService } from './lib/services/members/members.service';

@Module({
  imports: [TypeOrmModule.forFeature([MemberDetails])],
  controllers: [LoginController, RegisterController],
  providers: [LoginService, RegisterService, MembersService],
  exports: [],
})
export class MembersModule {}
