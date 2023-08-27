import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityDetails } from './typeorm/CommunityDetails';
import { CommunityController } from './controller/community.controller';
import { CommunityService } from './service/community.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityDetails])],
  controllers: [CommunityController],
  providers: [CommunityService],
  exports: [],
})
export class CommunityModule {}
