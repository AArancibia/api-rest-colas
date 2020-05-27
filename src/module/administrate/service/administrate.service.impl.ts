import { AdministrateEntity } from '../../../core/entities/database/administrate.entity';

export interface AdministrateServiceImpl {
  getAdministrateById(idAdministrate: string): Promise<AdministrateEntity>;
}
