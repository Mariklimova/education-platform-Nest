import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BodyDtoCourse } from './course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from 'src/shemas/course.shema';

@Injectable()
export class CourseService {
  constructor(@InjectModel('course') private readonly courseModel: Model<Course>,) { }

  createCourse(obj: BodyDtoCourse) {
    return this.courseModel.create(obj);
  }

  getAllCourse() {
    return this.courseModel.find();
  }

  getByIdCourse(id: number) {
    return this.courseModel.findById(id);
  }

  putCourse(id: number, obj: BodyDtoCourse) {
    return this.courseModel.findByIdAndUpdate(id, obj);
  }

  deleteCourse(id: number) {
    return this.courseModel.findByIdAndDelete(id);
  }
}
