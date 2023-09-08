/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BlogsService } from '../service/blogs.service';
import { Blogs } from '../interface/blogs.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async getBlogs() {
    const blogs = await this.blogsService.getBlogs();
    return blogs.filter((blog) => !blog.pending);
  }

  @Get('search?')
  async findBlogs(@Query('keyword') keyValue: string) {
    const blogs = await this.blogsService.searchBlogs(keyValue);
    return blogs;
  }

  @Get(':id')
  async getBlog(@Param() blog: any) {
    return this.blogsService.findBlogs(blog.id);
  }

  @Get('community/:id')
  async getBlogsByCommunityId(@Param() community: any) {
    return this.blogsService.findBlogsByCommunity(community.id);
  }

  @Get('moderator/:id')
  getBlogsByModeratorId(@Param() moderator: any) {
    return this.blogsService.findBlogsByModerator(moderator.id);
  }

  @Get('bookmarks/:id')
  getBlogsByModeratorBookmarks(@Param() moderator: any) {
    return this.blogsService.findBlogsByModeratorBookmarks(moderator.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createModerator(@Body() blogInfo: Blogs) {
    return this.blogsService.addBlog(blogInfo);
  }

  @Patch(':blogId')
  async updateBlog(@Param('blogId') blogId: string) {
    await this.blogsService.updateBlog(blogId, false);
    return {
      blogId,
    };
  }

  @Delete('delete/:id')
  async removeBlog(@Param('id') blog: any) {
    await this.blogsService.deleteBlog(blog);
    return { blogId: blog };
  }
}
