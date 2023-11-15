import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(user_id: string) {
    return `This action returns a #${user_id} user`;
  }

  update(user_id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${user_id} user`;
  }

  remove(user_id: string) {
    return `This action removes a #${user_id} user`;
  }
}
