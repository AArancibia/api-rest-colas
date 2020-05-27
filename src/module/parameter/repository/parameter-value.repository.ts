import { EntityRepository, Repository } from 'typeorm';
import { ParameterValueEntity } from '../../../core/entities/database/parameter-value.entity';

@EntityRepository(ParameterValueEntity)
export class ParameterValueRepository extends Repository<ParameterValueEntity>{

}
