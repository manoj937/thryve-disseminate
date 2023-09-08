import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateModeratorDto {
  @IsNotEmpty()
  @MinLength(3)
  moderatorId!: string;

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
