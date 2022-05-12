import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  readonly name: string;

  @IsNumber()
  readonly rate_inside?: number;

  @IsNumber()
  readonly rate_outside?: number;
}
