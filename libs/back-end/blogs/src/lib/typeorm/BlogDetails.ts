import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('blogs')
export class BlogDetails {

  @PrimaryColumn({
    name: 'blog_id',
    nullable: false
  })
  blogId!: string;

  @Column({
    name: 'member_id',
    nullable: false
  })
  memberId!: string;

  @Column({
    name: 'community_id',
    nullable: false
  })
  communityId!: string;

  @Column({
    nullable: false
  })
  title!: string;

  @Column({
    nullable: false
  })
  tags!: string;

  @Column({
    nullable: false
  })
  content!: string;

  @Column()
  bookmarks!: string;

  @Column({
    nullable: false
  })
  image!: string;

  @Column({
    nullable: false
  })
  time!: string;

  @Column({
    nullable: false
  })
  likes!: string;

  @Column({
    nullable: false
  })
  comments!: string;

  @Column({
    nullable: false
  })
  views!: string;

  @Column({
    name: 'read_time',
    nullable: false
  })
  readTime!: string;

}
