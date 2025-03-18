import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shemas/user.shemas';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModule: Model<User>){}
  
  getHello(): string {
    return 'Hello World!';
  }
  createUser(obj){
    return this.userModule.create(obj)
  }
}
