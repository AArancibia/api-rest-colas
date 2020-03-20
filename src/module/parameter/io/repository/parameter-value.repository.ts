import { EntityRepository, Repository } from 'typeorm';
import { ParameterValueEntity } from '../entity/parameter-value.entity';

@EntityRepository(ParameterValueEntity)
export class ParameterValueRepository extends Repository<ParameterValueEntity>{

}
