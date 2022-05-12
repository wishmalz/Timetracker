import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  readonly code: string;

  @IsString()
  readonly avatar?: string;

  readonly notes?: string;
}
