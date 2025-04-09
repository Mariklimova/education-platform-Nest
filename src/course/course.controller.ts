import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { BodyDtoCourse } from './course.dto';

@Controller('/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) { }

  @Post()
  async createCourse(@Body() obj: BodyDtoCourse) {
    return await this.courseService.createCourse(obj);
  }
  @Get()
  async getAllUser() {
    return await this.courseService.getAllCourse();
  }

  @Get('/:id')
  async getByIdCourse(@Param('id')id:number) {
    return await this.courseService.getByIdCourse(id);
  }

  @Put('/:id')
  async putCourse(@Param('id')id:number, @Body() obj:BodyDtoCourse) {
    return await this.courseService.putCourse(id,obj);
  }

  @Delete('/:id')
  async deleteCourse(@Param('id')id:number) {
    return await this.courseService.deleteCourse(id);
  }
}
