import { PartialType } from '@nestjs/swagger';
import { CreateChangePassDto } from './create-change-pass.dto';

export class UpdateChangePassDto extends PartialType(CreateChangePassDto) {}
