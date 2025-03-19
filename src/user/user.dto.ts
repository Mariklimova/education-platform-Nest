import { IsString, MinLength, IsInt, Min, Max } from "class-validator";


export class BodyDto {
    @IsString()
    name: string;
    pasword: string;

    @IsString()
    @MinLength(8)
    email: string;

    @IsInt()
    @Min(18)
    @Max(100)
    age: number;
}