import { EntityRepository, Repository } from 'typeorm';
import { AdministrateEntity } from '../../../core/entities/database/administrate.entity';

@EntityRepository(AdministrateEntity)
export class AdministrateRepository extends Repository<AdministrateEntity> {

}
