import { AdministrateEntity } from '../io/entity/administrate.entity';

export interface AdministrateServiceImpl {
  getAdministrateById(idAdministrate: string): Promise<AdministrateEntity>;
}
