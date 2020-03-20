import { EntityRepository, Repository } from 'typeorm';
import { AdministrateEntity } from '../entity/administrate.entity';

@EntityRepository(AdministrateEntity)
export class AdministrateRepository extends Repository<AdministrateEntity> {

}
