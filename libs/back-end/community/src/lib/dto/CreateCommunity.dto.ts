import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCommunityDto {
  @IsNotEmpty()
  @MinLength(3)
  communityId!: string;

  @IsNotEmpty()
  @MinLength(3)
  memberId!: string;

  @IsNotEmpty()
  @MinLength(3)
  title!: string;

  @IsNotEmpty()
  @MinLength(3)
  description!: string;

  @IsNotEmpty()
  members!: string;

  @IsNotEmpty()
  tags!: string;

  @IsNotEmpty()
  type!: string;

  pendingApprovals!: string;
  
  @IsNotEmpty()
  createdOn!: string;

}
