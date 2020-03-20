import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministrateServiceImpl } from './administrate.service.impl';
import { AdministrateEntity } from '../io/entity/administrate.entity';
import { AdministrateRepository } from '../io/repository/administrate.repository';

@Injectable()
export class AdministrateService implements AdministrateServiceImpl{
  constructor(
    @InjectRepository(AdministrateRepository) private administrateRepository: AdministrateRepository,
  ){}

  async getAdministrateById(idAdministrate: string): Promise<AdministrateEntity> {
    return await this.administrateRepository.findOne({ where: { idAdministrate } });
  }
}
