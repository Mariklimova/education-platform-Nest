import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post()
  async create(@Body() obj) {
    return await this.userService.createUser(obj)
  }
}
