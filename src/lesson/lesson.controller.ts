import { Controller, Get, Post,Body, Param, Delete, Put } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { BodyDtoLesson } from './lesson.dto';

@Controller('/lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  async createLesson(@Body() obj:BodyDtoLesson) {
    return await this.lessonService.createLesson(obj);
  }

  @Get()
  async getAllLesson() {
    return await this.lessonService.getAllLesson();
  }

  @Get('/:id')
  async getByIdLesson(@Param('id')id:number) {
    return await this.lessonService.getByIdLesson(id);
  }

  @Put('/:id')
  async putLesson(@Param('id')id:number, @Body()obj:BodyDtoLesson) {
    return await this.lessonService.putLesson(id,obj);
  }

  @Delete('/:id')
  async deleteLesson(@Param('id')id:number) {
    return await this.lessonService.deleteLesson(id);
  }

}
