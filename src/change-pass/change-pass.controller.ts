import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChangePassService } from './change-pass.service';
import { ChangePassDto } from './dto/change-pass.dto';

@Controller('change-pass')
export class ChangePassController {
  constructor(private readonly changePassService: ChangePassService) {}

  @Post()
  create(@Body() createChangePassDto: ChangePassDto) {
    return this.changePassService.create(createChangePassDto);
  }

  @Get()
  findAll() {
    return this.changePassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.changePassService.findOne(+id);
  }


}
