import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from 'src/shemas/lesson.shema';

@Module({
  imports: [MongooseModule.forFeature([{name:'lesson',schema:LessonSchema}])],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
