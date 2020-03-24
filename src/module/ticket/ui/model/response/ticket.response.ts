import { ParameterValueEntity } from '../../../../parameter/io/entity/parameter-value.entity';
import { AdministrateEntity } from '../../../../administrate/io/entity/administrate.entity';
import { AdministrateResponse } from '../../../../administrate/ui/model/response/administrate.response';
import { ParameterValueResponse } from '../../../../parameter/ui/model/response/parameter-value.response';

export class TicketResponse {
  idTicket: string;
  codigo: string;
  correlativo: number;
  urgente: boolean;
  idVentanilla: string;
  tipoTicket: ParameterValueResponse;
  idTipoTicket: string;
  administrado: AdministrateResponse;
  idAdministrado: string;

  constructor(idTicket: string, codigo: string, correlativo: number, urgente: boolean, idVentanilla: string, tipoTicket: ParameterValueResponse, idTipoTicket: string, administrado: AdministrateResponse, idAdministrado: string) {
    this.idTicket = idTicket;
    this.codigo = codigo;
    this.correlativo = correlativo;
    this.urgente = urgente;
    this.idVentanilla = idVentanilla;
    this.tipoTicket = tipoTicket;
    this.idTipoTicket = idTipoTicket;
    this.administrado = administrado;
    this.idAdministrado = idAdministrado;
  }
}
