import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('members')
export class MemberDetails {

  @PrimaryColumn({
    name: 'member_id',
    nullable: false
  })
  memberId!: string;

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
