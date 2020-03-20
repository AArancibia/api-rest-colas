import { ParameterValueEntity } from '../../../../parameter/io/entity/parameter-value.entity';
import { AdministrateEntity } from '../../../../administrate/io/entity/administrate.entity';

export class TicketResponse {
  idTicket: string;
  codigo: string;
  correlativo: number;
  urgente: boolean;
  idVentanilla: string;
  tipoTicket: ParameterValueEntity;
  idTipoTicket: string;
  administrado: AdministrateEntity;
  idAdministrate: string;

  constructor(idTicket: string, codigo: string, correlativo: number, urgente: boolean, idVentanilla: string, tipoTicket: ParameterValueEntity, idTipoTicket: string, administrado: AdministrateEntity, idAdministrate: string) {
    this.idTicket = idTicket;
    this.codigo = codigo;
    this.correlativo = correlativo;
    this.urgente = urgente;
    this.idVentanilla = idVentanilla;
    this.tipoTicket = tipoTicket;
    this.idTipoTicket = idTipoTicket;
    this.administrado = administrado;
    this.idAdministrate = idAdministrate;
  }
}
