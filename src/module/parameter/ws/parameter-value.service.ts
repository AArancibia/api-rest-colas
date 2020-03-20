import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParameterValueEntity } from '../io/entity/parameter-value.entity';
import { ParameterValueRepository } from '../io/repository/parameter-value.repository';

@Injectable()
export class ParameterValueService {

  constructor(
    @InjectRepository(ParameterValueRepository) private parameterValueRepository: ParameterValueRepository,
  ){}

  async getParameterValueById(
    idParameterValue: string,
  ): Promise<ParameterValueEntity>{
    return await this.parameterValueRepository.findOne({ where: { idParameterValue }});
  }
}
