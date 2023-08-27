/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogsService } from '../service/blogs.service';
import { Blogs } from '../interface/blogs.interface';

@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async getBlogs() {
    const blogs = await this.blogsService.getBlogs();
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

  @Get('member/:id')
  getBlogsByMemberId(@Param() member: any) {
    return this.blogsService.findBlogsByMember(member.id);
  }

  @Get('bookmarks/:id')
  getBlogsByMemberBookmarks(@Param() member: any) {
    console.log(member.id)
    return this.blogsService.findBlogsByMemberBookmarks(member.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createMember(@Body() blogInfo: Blogs) {
    return this.blogsService.addBlog(blogInfo);
  }
}
