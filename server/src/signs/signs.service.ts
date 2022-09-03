import { Injectable } from "@nestjs/common";
import { SignsRepository } from "./signs.repository";

@Injectable()
export class SignsService {
  constructor(private SignRepo: SignsRepository) {}

  async findAll(pattern: string) {
    return await this.SignRepo.findAllByPattern(pattern);
  }
}
