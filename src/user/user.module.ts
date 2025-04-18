import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from 'src/shemas/user.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:'users', schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
