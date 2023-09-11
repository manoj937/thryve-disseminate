import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { BlogDetails } from '../typeorm/BlogDetails';
import { DataSource, Like, Repository } from 'typeorm';
import { Blogs } from '../interface/blogs.interface';
import { CreateBlogDto } from '../dto/CreateBlog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogDetails)
    private readonly blogsRepository: Repository<BlogDetails>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  getBlogs() {
    const blogs = this.blogsRepository.find().then((blogs) => {
      return blogs.map((blog) => ({
        blogId: blog.blogId,
        moderatorId: blog.moderatorId,
        communityId: blog.communityId,
        title: blog.title,
        bookmarks: blog.bookmarks.split(',').filter((t) => t.length > 3),
        tags: blog.tags.split(',').filter((t) => t.length > 3),
        content: blog.content,
        image: blog.image,
        time: blog.time,
        likes: blog.likes,
        comments: blog.comments,
        views: blog.views,
        readTime: blog.readTime,
        pending: blog.pending
      }));
    });
    return blogs;
  }

  async findBlogs(blogId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter((blog) => blog.blogId === blogId);
  }

  async findBlogsByCommunity(communityId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter((blog) => blog.communityId === communityId);
  }

  async findBlogsByModerator(moderatorId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter((blog) => blog.moderatorId === moderatorId);
  }

  async findBlogsByModeratorBookmarks(moderatorId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter((blog) => blog.bookmarks.includes(moderatorId));
  }

  setBlogId(blogs: Blogs[], id: number) {
    const blogId = 'BLOG' + ('00' + id).slice(-3);
    for (const blog of blogs) {
      if (blog.blogId === blogId) {
        this.setBlogId(blogs, id + 1);
      }
    }
    return blogId;
  }

  async searchBlogs(keyValue: string) {
    const blogs = (await this.blogsRepository.find({
      where: {
        title: Like(`%${keyValue}%`),
      },
    })).map((blog) => ({
      blogId: blog.blogId,
      moderatorId: blog.moderatorId,
      communityId: blog.communityId,
      title: blog.title,
      bookmarks: blog.bookmarks.split(',').filter((t) => t.length > 3),
      tags: blog.tags.split(',').filter((t) => t.length > 3),
      content: blog.content,
      image: blog.image,
      time: blog.time,
      likes: blog.likes,
      comments: blog.comments,
      views: blog.views,
      readTime: blog.readTime,
      pending: blog.pending
    }));
  return blogs;
  }

  async addBlog(blogInfo: Blogs) {
    const blogs = await this.getBlogs();
    const blogId = this.setBlogId(blogs, blogs.length);
    let newBlog = false;
    const createBlogDto: CreateBlogDto = {
      blogId,
      moderatorId: blogInfo.moderatorId,
      communityId: blogInfo.communityId,
      title: blogInfo.title,
      tags: String(blogInfo.tags),
      bookmarks: String(blogInfo.bookmarks),
      content: blogInfo.content,
      image: blogInfo.image,
      time: blogInfo.time,
      likes: blogInfo.likes,
      comments: blogInfo.comments,
      views: blogInfo.views,
      readTime: blogInfo.readTime,
      pending: true
    };

    for (const blog of blogs) {
      if (blog.title === blogInfo.title) {
        return {
          status: 'Error',
          message: 'Blog already exist',
        };
      } else {
        newBlog = true;
      }
    }
    if (newBlog || !blogs.length) {
      const addBlog = this.blogsRepository.create(createBlogDto);
      return this.blogsRepository.save(addBlog);
    } else {
      return 0;
    }
  }

  async updateBlog(
    blogId: string,
    pending: boolean,
  ) {
    return this.blogsRepository.update( blogId , { pending });
  }
  
  async deleteBlog(id: string) {
    const result = this.blogsRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find blog.');
    }
  }

}
