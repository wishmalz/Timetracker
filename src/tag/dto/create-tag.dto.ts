import { IsNotEmpty, Length } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @Length(3, 255)
  readonly name: string;
}
