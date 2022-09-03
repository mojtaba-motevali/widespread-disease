import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";




@Injectable()
export class AppRepository {
    constructor(private prismaService:PrismaService){}


    async findAppData(){
        const result = await Promise.all([
            this.prismaService.$queryRaw(`SELECT COUNT(DISTINCT signs_disease_join."signId") AS totalSigns,COUNT(DISTINCT signs_disease_join."diseaseId") AS totalDiseases FROM signs_disease_join`),
            this.prismaService.doctor.count(),
            this.prismaService.specialist.count()
        ])
        return {   
            totalSigns:result[0][0].totalsigns,
            totalDiseases:result[0][0].totaldiseases,
            totalDoctors:result[1],
            totalSpecialists:result[2]
        };
    }
}