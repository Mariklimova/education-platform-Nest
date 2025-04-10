import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Lesson } from 'src/shemas/lesson.shema';
import { BodyDtoLesson } from './lesson.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LessonService {
  constructor(@InjectModel('lesson') private readonly lessonModel: Model<Lesson>) { }

  createLesson(obj: BodyDtoLesson) {
    return this.lessonModel.create(obj)
  }

  getAllLesson() {
    return this.lessonModel.find()
  }
}

