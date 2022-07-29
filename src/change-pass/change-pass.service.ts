import { Injectable } from '@nestjs/common';
import { CreateChangePassDto } from './dto/create-change-pass.dto';
import { UpdateChangePassDto } from './dto/update-change-pass.dto';

@Injectable()
export class ChangePassService {
  create(createChangePassDto: CreateChangePassDto) {
    return 'This action adds a new changePass';
  }

  findAll() {
    return `This action returns all changePass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} changePass`;
  }

  update(id: number, updateChangePassDto: UpdateChangePassDto) {
    return `This action updates a #${id} changePass`;
  }

  remove(id: number) {
    return `This action removes a #${id} changePass`;
  }
}
