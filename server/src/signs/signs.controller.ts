import { Controller, Get, Param, Query } from '@nestjs/common';
import { SignsService } from './signs.service';

@Controller('signs')
export class SignsController {
  constructor(private readonly signsService: SignsService) {}
// ?name=khgjyhvgj
  @Get()
  findAll(@Query('name') pattern:string) {
    return this.signsService.findAll(pattern);
  } 
}