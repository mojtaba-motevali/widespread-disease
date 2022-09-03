import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";




@Injectable()
export class SignsRepository {
    constructor(private prismaService:PrismaService){}


    async findAllByPattern(pattern:string){
        return await this.prismaService.signs.findMany({
            where:{
                name:{
                    contains:pattern
                },
            },
            take:20,
        })
    }
}