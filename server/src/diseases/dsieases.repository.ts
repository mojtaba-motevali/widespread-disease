import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDiseaseDoctor } from './dto/query.dto';

@Injectable()
export class DiseasesRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll(ids: [number]) {
    // y : signs
    // x : matched
    // y - x = notMatched
    // x -  ( y - x ) = 2x - y
    const resultRawQuery = await this.prismaService
      .$queryRaw(`SELECT "diseaseId",COUNT("diseaseId") FROM signs_disease_join
        WHERE "signId" IN (${ids}) GROUP BY "diseaseId" HAVING (2*COUNT("diseaseId") - ${ids.length}  > 0);`);
    const diseaseIds = [];
    if (resultRawQuery.length > 0) {
      resultRawQuery.forEach((item) => diseaseIds.push(item.diseaseId));
      return {
        diseases: await this.prismaService.disease.findMany({
          where: { id: { in: [...diseaseIds] } },
          select: {
            id: true,
            name: true,
            specialistId: true,
            signs_disease_join: {
              select: { signs: { select: { id: true, name: true } } },
            },
          },
        }),
        occurance: resultRawQuery,
      };
    }
    return resultRawQuery;
  }
  async findOne(
    id: number,
    search: QueryDiseaseDoctor,
  ): Promise<{ diseases: Prisma.diseaseCreateInput; doctorInfo: any }> {
    const resultQueries = await Promise.all([
      this.prismaService.disease.findUnique({
        where: { id: id },
        select: {
          id: true,
          description: true,
          name: true,
          causedBy: true,
          medicrecom: true,
          sideeffect: true,
          spreads: true,
        },
      }),
      Object.keys(search).length === 3
        ? this.prismaService.$queryRaw(`
            SELECT doctor."id","firstName","lastName","address","phone", lat as latitude, long as longitude,doctor."createdAt",
            specialist."name" AS specialistName FROM doctor LEFT JOIN specialist ON doctor."specialistId" = specialist."id" WHERE 
            st_distancesphere( ST_MakePoint(${search.latitude},${search.longitude}),ST_MakePoint(lat,long) ) = (
                SELECT MIN (
                    st_distancesphere( ST_MakePoint(${search.latitude}, ${search.longitude}),ST_MakePoint(lat,long) ) )
                 FROM doctor  WHERE "specialistId" = ${search.specialistid})
            `)
        : {},
    ]);
    return {
      diseases: resultQueries[0],
      doctorInfo: resultQueries[1][0],
    };
  }
}
