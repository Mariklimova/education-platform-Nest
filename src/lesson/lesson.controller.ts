import { Controller, Get, Post,Body } from '@nestjs/common';
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
}
