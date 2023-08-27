import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogDetails } from '../typeorm/BlogDetails';
import { Repository } from 'typeorm';
import { Blogs } from '../interface/blogs.interface';
import { CreateBlogDto } from '../dto/CreateBlog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogDetails)
    private readonly blogsRepository: Repository<BlogDetails>
  ) {}

  getBlogs() {
    const blogs = this.blogsRepository.find().then((blogs) => {
      return blogs.map((blog) => ({
        blogId: blog.blogId,
        memberId: blog.memberId,
        communityId: blog.communityId,
        title: blog.title,
        bookmarks: blog.bookmarks.split('"').filter((t) => t.length > 3),
        tags: blog.tags.split('"').filter((t) => t.length > 3),
        content: blog.content,
        image: blog.image,
        time: blog.time,
        likes: blog.likes,
        comments: blog.comments,
        views: blog.views,
        readTime: blog.readTime
      }));
    });
    return blogs;
  }

  async findBlogs(blogId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter(
      (blog) => blog.blogId === blogId
    );
  }

  async findBlogsByCommunity(communityId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter(
        (blog) => blog.communityId === communityId
    );
  }

  async findBlogsByMember(memberId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter(
        (blog) => blog.memberId === memberId
    );
  }

  async findBlogsByMemberBookmarks(memberId: string) {
    const blogs = await this.getBlogs();
    return blogs.filter((blog) => blog.bookmarks.includes(memberId)
    );
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

  async addBlog(blogInfo: Blogs) {
    const blogs = await this.getBlogs();
    const blogId = this.setBlogId(blogs, blogs.length);
    let newBlog = false;
    const createBlogDto: CreateBlogDto = {
        blogId,
        memberId: blogInfo.memberId,
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
    } else { return 0 }
  }
}
