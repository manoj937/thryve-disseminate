import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsService } from './service/blogs.service';
import { BlogsController } from './controller/blogs.controller';
import { BlogDetails } from './typeorm/BlogDetails';

@Module({
  imports: [TypeOrmModule.forFeature([BlogDetails])],
  controllers: [BlogsController],
  providers: [BlogsService],
  exports: [],
})
export class BlogsModule {}
