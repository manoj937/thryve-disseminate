import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('qa')
export class QaDetails {

  @PrimaryColumn({
    name: 'qa_id',
    nullable: false
  })
  qaId!: string;

  @Column({
    name: 'moderator_id',
    nullable: false
  })
  moderatorId!: string;

  @Column({
    name: 'community_id',
    nullable: false
  })
  communityId!: string;

  @Column({
    nullable: false
  })
  question!: string;

  @Column({
    nullable: false
  })
  tags!: string;

  @Column({
    nullable: false
  })
  detail!: string;

  @Column()
  bookmarks!: string;

  @Column({
    nullable: false
  })
  time!: string;

  @Column()
  answers!: string;

  @Column({
    name: 'selected_answers'
  })
  selectedAnswers!: string;

}
