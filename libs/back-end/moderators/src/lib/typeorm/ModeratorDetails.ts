import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('moderators')
export class ModeratorDetails {

  @PrimaryColumn({
    name: 'moderator_id',
    nullable: false
  })
  moderatorId!: string;

  @Column({
    nullable: false
  })
  name!: string;

  @Column()
  email!: string;

  @Column({
    name: 'user_password',
    nullable: false
  })
  userPassword!: string;

  @Column({
    name: 'is_admin',
    nullable: false
  })
  isAdmin!: boolean;

  @Column({
    name: 'admin_password',
    nullable: false
  })
  adminPassword!: string;

}
