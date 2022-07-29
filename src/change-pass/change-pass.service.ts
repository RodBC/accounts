import { Injectable } from '@nestjs/common';
import { ChangePassDto } from './dto/change-pass.dto';

@Injectable()
export class ChangePassService {
  create(createChangePassDto: ChangePassDto) {
    return 'This action adds a new changePass';
  }

  findAll() {
    return `This action returns all changePass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} changePass`;
  }

}
