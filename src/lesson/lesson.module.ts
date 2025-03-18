import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';

@Module({
  imports: [],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
