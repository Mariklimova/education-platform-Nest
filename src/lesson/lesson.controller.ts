import { Controller, Get } from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller()
export class LessonController {
  constructor(private readonly appService: LessonService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
