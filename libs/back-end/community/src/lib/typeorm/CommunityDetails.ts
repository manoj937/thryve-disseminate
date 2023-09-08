import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('communities')
export class CommunityDetails {

  @PrimaryColumn({
    name: 'community_id',
    nullable: false
  })
  communityId!: string;

  @Column({
    name: 'moderator_id',
    nullable: false
  })
  moderatorId!: string;

  @Column({
    nullable: false
  })
  title!: string;

  @Column({
    nullable: false
  })
  description!: string;

  @Column()
  moderators!: string;

  @Column({
    nullable: false
  })
  tags!: string;

  @Column({
    nullable: false
  })
  type!: string;

  @Column({
    name: 'pending_approvals',
  })
  pendingApprovals!: string;

  @Column({
    name: 'created_on',
    nullable: false
  })
  createdOn!: string;
}
