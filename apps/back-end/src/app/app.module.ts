import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDetails, BlogsModule } from '@thryve-disseminate/back-end/blogs';
import { CommunityDetails, CommunityModule } from '@thryve-disseminate/back-end/community';
import { MemberDetails, MembersModule } from '@thryve-disseminate/back-end/members';

const entities = [ MemberDetails, CommunityDetails, BlogDetails];

@Module({
  imports: [
    MembersModule,
    CommunityModule,
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '94.100.26.108',
      // host: 'localhost',
      port: 3306,
      username: 'thryve',
      password: 'thryve123',
       database: 'thryve_disseminate',
      //  username: 'root',
      // password: 'neha',
      entities,
      synchronize: true,
      connectTimeout: 60 * 60 * 1000,
      acquireTimeout: 60 * 60 * 1000
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
