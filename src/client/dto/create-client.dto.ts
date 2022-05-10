import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  readonly name: string;

  readonly avatar: string;
}
