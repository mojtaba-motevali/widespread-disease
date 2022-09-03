import { PartialType } from '@nestjs/mapped-types';
import { CreateSignDto } from './create-sign.dto';

export class UpdateSignDto extends PartialType(CreateSignDto) {}
