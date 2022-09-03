import { Injectable } from '@nestjs/common';
import { DiseasesRepository } from './dsieases.repository';
import { QueryDiseaseDoctor } from './dto/query.dto';


@Injectable()
export class DiseasesService {

  constructor(private diseaseRepo : DiseasesRepository){}
  async findAll(ids:[number]) {
    return  await this.diseaseRepo.findAll(ids);
  }

  async findOne(id: number,search:QueryDiseaseDoctor) {
    return await this.diseaseRepo.findOne(id,search);
  }


}
