import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Lesson {
@Prop()
title:string;

@Prop()
description: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson)