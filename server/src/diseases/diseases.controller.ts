import { Controller, Get, Param,  Query, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { QueryDiseaseDoctor, QuerySearch } from './dto/query.dto';

@Controller('diseases')
export class DiseasesController {
  constructor(private readonly diseasesService: DiseasesService) {}
  @Get()
  async findAll(@Query(new ValidationPipe({transform:true,whitelist:true})) search:QuerySearch ) {
    return await this.diseasesService.findAll(search.signs);
  }
  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number,@Query(new ValidationPipe({transform:true,whitelist:true})) search:QueryDiseaseDoctor ) {
    return await this.diseasesService.findOne(id,search);
  }

}
