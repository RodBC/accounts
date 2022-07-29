import { HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    try {
      return await AppDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values(createUserDto)
        .execute();
    } catch(err){
      console.log(err)
      return HttpStatus.INTERNAL_SERVER_ERROR
    }
  }

  async findAll() {
    try {
      return await AppDataSource.createQueryBuilder()
        .select('u')
        .from(User, 'o')
        .getMany();
    } catch (err){
      console.log(err)
      return HttpStatus.INTERNAL_SERVER_ERROR
    }
  }

  async remove(id: number) {
    try {
      return await AppDataSource.createQueryBuilder()
        .delete()
        .from(User)
        .where('id=:taskID', {taskID: id})
        .execute()
    } catch(err){
      console.log(err)
      return HttpStatus.INTERNAL_SERVER_ERROR
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

}
