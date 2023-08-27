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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'manoj',
      database: 'thryve_disseminate',
      entities,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
