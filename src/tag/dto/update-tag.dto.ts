import { IsNotEmpty, Length } from 'class-validator';

export class UpdateTagDto {
  @IsNotEmpty()
  @Length(3, 255)
  readonly name: string;
}
