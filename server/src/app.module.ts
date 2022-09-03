import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SignsModule } from './signs/signs.module';
import { DiseasesModule } from './diseases/diseases.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppRepository } from './app.repository';
@Module({
  imports: [PrismaModule, SignsModule, DiseasesModule , 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService,AppRepository],
})
export class AppModule {}
