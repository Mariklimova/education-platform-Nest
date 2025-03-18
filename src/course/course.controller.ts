import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller()
export class CourseController {
  constructor(private readonly appService: CourseService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
