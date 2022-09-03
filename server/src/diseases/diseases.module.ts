import { Module } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { DiseasesController } from './diseases.controller';
import { DiseasesRepository } from './dsieases.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [DiseasesController],
  providers: [DiseasesService,DiseasesRepository]
})
export class DiseasesModule {}
