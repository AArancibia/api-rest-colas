import { AdapterMapper } from './adapter.mapper';
import { AdministrateRequest } from '../../module/administrate/ui/model/request/administrate.request';
import { AdministrateEntity } from '../../module/administrate/io/entity/administrate.entity';
import { AdministrateResponse } from '../../module/administrate/ui/model/response/administrate.response';

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
