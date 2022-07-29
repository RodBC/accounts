import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChangePassService } from './change-pass.service';
import { CreateChangePassDto } from './dto/create-change-pass.dto';
import { UpdateChangePassDto } from './dto/update-change-pass.dto';

@Controller('change-pass')
export class ChangePassController {
  constructor(private readonly changePassService: ChangePassService) {}

  @Post()
  create(@Body() createChangePassDto: CreateChangePassDto) {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChangePassDto: UpdateChangePassDto) {
    return this.changePassService.update(+id, updateChangePassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.changePassService.remove(+id);
  }
}
