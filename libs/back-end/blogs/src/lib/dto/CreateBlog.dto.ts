import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateBlogDto {
  @IsNotEmpty()
  @MinLength(3)
  blogId!: string;

  @IsNotEmpty()
  @MinLength(3)
  memberId!: string;

  @IsNotEmpty()
  @MinLength(3)
  communityId!: string;

  @IsNotEmpty()
  @MinLength(3)
  title!: string;

  @IsNotEmpty()
  tags!: string;

  @IsNotEmpty()
  content!: string;

  bookmarks!: string;

  @IsNotEmpty()
  image!: string;

  time!: string;

  likes!: string;

  comments!: string;

  @IsNotEmpty()
  views!: string;

  @IsNotEmpty()
  readTime!: string;
}
