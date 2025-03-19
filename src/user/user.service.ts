import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shemas/user.shemas';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModule: Model<User>){}
  
  createUser(obj){
    return this.userModule.create(obj)
  }

  getAllUser() {
    return this.userModule.find();
  }

  getByIdUser(id:number) {
    return this.userModule.findById(id);
  }

  putUser(id:number, obj) {
    return this.userModule.findByIdAndUpdate(id,obj);
  }

  deleteUser(id:number) {
    return this.userModule.findByIdAndDelete(id);
  }
}
