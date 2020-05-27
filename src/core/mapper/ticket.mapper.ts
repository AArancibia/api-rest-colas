import { AdapterMapper } from './adapter.mapper';
import { TicketRequest } from '../entities/request/ticket.request';
import { TicketEntity } from '../entities/database/ticket.entity';
import { TicketResponse } from '../entities/response/ticket.response';
import { TicketEntityBuilder } from '../entities/database/ticket.entity.builder';
import { TicketResponseBuilder } from '../entities/response/ticket.response.builder';
import { AdministrateMapper } from './administrate.mapper';
import { AdministrateResponseBuilder } from '../entities/response/administrate.response.builder';
import { ParameterValueResponseBuilder } from '../entities/response/parameter-value.response.builder';

export class TicketMapper implements AdapterMapper<TicketRequest, TicketEntity, TicketResponse>{
  mapperFromDtoToEntity(item: TicketRequest): TicketEntity {
    return new TicketEntityBuilder()
      .setIdticket(item.idTicket)
      .setCode(item.codigo)
      .setCorrelative(item.correlativo)
      .setIdAdministrate(item.idAdministrado)
      .setIdTicketType(item.idTipoTicket)
      .setIdWindow(item.idVentanilla)
      .setUrgent(item.urgente)
      .create();
  }

  mapperFromEntityToRO(item: TicketEntity): TicketResponse {
    return new TicketResponseBuilder()
      .setIdticket(item.idticket)
      .setCodigo(item.code)
      .setCorrelativo(Number(item.correlative))
      .setIdAdministrate(item.idAdministrate)
      .setAdministrado(
        new AdministrateResponseBuilder()
          .setIdAdministrado(item.administrate.idAdministrate)
          .setApellidos(item.administrate.lastName)
          .setNombre(item.administrate.name)
          .setNumeroDocumento(item.administrate.numberDocument)
          .create()
      )
      .setIdTipoTicket(item.idTicketType)
      .setTipoTicket(
        new ParameterValueResponseBuilder()
          .setIdParametrotroValor(item.ticketType.idParameterValue)
          .setIdParametro(item.ticketType.idParameter)
          .setNombre(item.ticketType.name)
          .setDescripcion(item.ticketType.description)
          .setValorAdicional(item.ticketType.additionalValue)
          .setValorAdicional2(item.ticketType.additionalValue2)
          .create()
      )
      .setIdVentanilla(item.idWindow)
      .setUrgente(item.urgent)
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
