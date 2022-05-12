import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTimespanDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  readonly task_name: string;

  @IsString()
  @Length(3, 255)
  readonly description?: string;

  readonly duration?: number;

  readonly task_id?: number;

  readonly start_time: Date;

  readonly end_time: Date;

  readonly created_at: Date;

  readonly updated_at: Date;
}
