import { Module } from '@nestjs/common';
import { SignsService } from './signs.service';
import { SignsController } from './signs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SignsRepository } from './signs.repository';

@Module({
  imports:[PrismaModule],
  controllers: [SignsController],
  providers: [SignsService,SignsRepository]
})
export class SignsModule {}
