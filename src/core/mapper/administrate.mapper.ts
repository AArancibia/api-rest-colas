import { AdapterMapper } from './adapter.mapper';
import { AdministrateRequest } from '../entities/request/administrate.request';
import { AdministrateEntity } from '../entities/database/administrate.entity';
import { AdministrateResponse } from '../entities/response/administrate.response';

export class AdministrateMapper implements AdapterMapper<AdministrateRequest, AdministrateEntity, AdministrateResponse> {
  mapperFromDtoToEntity(item: AdministrateRequest): AdministrateEntity {
    return undefined;
  }

  mapperFromEntityToRO(item: AdministrateEntity): AdministrateResponse {
    return undefined;
  }

  mapperFromListDtoToEntity(list: Array<AdministrateRequest>): Array<AdministrateEntity> {
    return undefined;
  }

  mapperFromListEntityToRo(list: Array<AdministrateEntity>): Array<AdministrateResponse> {
    return undefined;
  }

}
