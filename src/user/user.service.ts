import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shemas/user.shema';
import { BodyDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModule: Model<User>){}
  
  createUser(obj:BodyDto){
    return this.userModule.create(obj)
  }

  getAllUser() {
    return this.userModule.find();
  }

  getByIdUser(id:number) {
    return this.userModule.findById(id);
  }

  putUser(id:number, obj:BodyDto) {
    return this.userModule.findByIdAndUpdate(id,obj);
  }

  deleteUser(id:number) {
    return this.userModule.findByIdAndDelete(id);
  }
}
