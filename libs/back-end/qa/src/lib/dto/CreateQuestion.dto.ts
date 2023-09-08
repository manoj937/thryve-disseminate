import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateQaDto {
  @IsNotEmpty()
  @MinLength(3)
  qaId!: string;

  @IsNotEmpty()
  @MinLength(3)
  moderatorId!: string;

  @IsNotEmpty()
  @MinLength(3)
  communityId!: string;

  @IsNotEmpty()
  @MinLength(3)
  question!: string;

  @IsNotEmpty()
  tags!: string;

  @IsNotEmpty()
  detail!: string;

  bookmarks!: string;

  time!: string;

  answers!: string;

  selectedAnswers!: string;

}
