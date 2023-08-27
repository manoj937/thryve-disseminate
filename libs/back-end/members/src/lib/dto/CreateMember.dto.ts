import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @MinLength(3)
  memberId!: string;

  @IsNotEmpty()
  @MinLength(3)
  name!: string;

  @IsNotEmpty()
  @MinLength(3)
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  userPassword!: string;

  @IsNotEmpty()
  isAdmin!: boolean;

  @IsNotEmpty()
  @MinLength(8)
  adminPassword!: string;
  }
