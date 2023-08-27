import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCommunityDto {
  @IsNotEmpty()
  @MinLength(3)
  communityId!: string;

  @IsNotEmpty()
  @MinLength(3)
  name!: string;

  members!: string;

  tags!: string;

}
