import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepo:AppRepository){}
  getAppData(): any {
    return this.appRepo.findAppData();
  }
}
