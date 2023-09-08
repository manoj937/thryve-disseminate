import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDetails, BlogsModule } from '@thryve-disseminate/back-end/blogs';
import { CommunityDetails, CommunityModule } from '@thryve-disseminate/back-end/community';
import { ModeratorDetails, ModeratorsModule } from '@thryve-disseminate/back-end/moderators';
import { QaDetails, QaModule } from '@thryve-disseminate/back-end/qa';

const entities = [ ModeratorDetails, CommunityDetails, BlogDetails, QaDetails];

@Module({
  imports: [
    ModeratorsModule,
    CommunityModule,
    BlogsModule,
    QaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '94.100.26.108',
      port: 3306,
      username: 'thryve',
      password: 'thryve123',
      database: 'thryve_disseminate',
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
