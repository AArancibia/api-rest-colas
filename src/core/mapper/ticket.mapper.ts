import { AdapterMapper } from './adapter.mapper';
import { TicketRequest } from '../../module/ticket/ui/model/request/ticket.request';
import { TicketEntity } from '../../module/ticket/io/entity/ticket.entity';
import { TicketResponse } from '../../module/ticket/ui/model/response/ticket.response';
import { TicketEntityBuilder } from '../../module/ticket/io/entity/ticket.entity.builder';
import { TicketResponseBuilder } from '../../module/ticket/ui/model/response/ticket.response.builder';

export class TicketMapper implements AdapterMapper<TicketRequest, TicketEntity, TicketResponse>{
  mapperFromDtoToEntity(item: any): TicketEntity {
    return new TicketEntityBuilder()
      .setIdticket(item.id)
      .setCode(item.codigo)
      .setCorrelative(item.correlativo)
      .create();
  }

  mapperFromEntityToRO(item: TicketEntity): TicketResponse {
    return new TicketResponseBuilder()
      .setIdticket(item.idticket)
      .setCodigo(item.code)
      .setCorrelativo(Number(item.correlative))
      .create();
  }

  mapperFromListEntityToRo(list: Array<TicketEntity>): Array<TicketResponse> {
    const mapper = new TicketMapper();
    return list.map(x => mapper.mapperFromEntityToRO(x));
  }

  mapperFromListDtoToEntity(list: Array<TicketRequest>): Array<TicketEntity> {
    const mapper = new TicketMapper();
    return list.map(x => mapper.mapperFromDtoToEntity(x));
  }

}
