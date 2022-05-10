import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  readonly name: string;
}
