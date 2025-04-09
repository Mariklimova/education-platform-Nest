import { IsString } from "class-validator";

export class BodyDtoCourse {
    @IsString()
    title: string;
    description: string;
    lewel: string;
}