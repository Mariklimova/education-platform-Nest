import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { BodyDtoUser } from './user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() obj:BodyDtoUser) {
    return await this.userService.createUser(obj)
  }

  @Get()
  async getAll() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  async getById(@Param('id') id:number) {
    return this.userService.getByIdUser(id);
  }
  @Get('/:id')
  async update(@Param('id') id:number, @Body() obj:BodyDtoUser) {
    return this.userService.putUser(id,obj);
  }
  @Get('/:id')
  async delete(@Param('id') id:number) {
    return this.userService.deleteUser(id);
  }

}
