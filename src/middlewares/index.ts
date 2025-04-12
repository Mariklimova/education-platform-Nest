import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '@nestjs/common'

export function ValidationUser(req: Request, res: Response, next: NextFunction) {
    const { name, email, age, password } = req.body

    if (!name) throw new BadRequestException('incorrect name')
    if (!email) throw new BadRequestException('incorrect email')
    if (!age) throw new BadRequestException('incorrect age')
    if (!password) throw new BadRequestException('incorrect password')

    next()
}


export function ValidationCourse (req:Request, res:Response, next:NextFunction){
    next()
}