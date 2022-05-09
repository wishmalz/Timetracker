import { PartialType } from '@nestjs/mapped-types';
import { CreateTimespanDto } from './create-timespan.dto';

export class UpdateTimespanDto extends PartialType(CreateTimespanDto) {}
