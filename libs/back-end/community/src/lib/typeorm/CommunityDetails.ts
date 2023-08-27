import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('communities')
export class CommunityDetails {

  @PrimaryColumn({
    name: 'community_id',
    nullable: false
  })
  communityId!: string;

  @Column({
    nullable: false
  })
  name!: string;

  @Column()
  members!: string;

  @Column()
  tags!: string;

}
