import { TicketResponse } from './ticket.response';
import { ParameterValueEntity } from '../../../../parameter/io/entity/parameter-value.entity';
import { AdministrateEntity } from '../../../../administrate/io/entity/administrate.entity';

export class TicketResponseBuilder{
  private _idticket: string;
  private _codigo: string;
  private _correlativo: number;
  private _urgente: boolean;
  private _idVentanilla: string;
  private _tipoTicket: ParameterValueEntity;
  private _idTipoTicket: string;
  private _administrado: AdministrateEntity;
  private _idAdministrate: string;

  setIdticket(value: string): TicketResponseBuilder {
    this._idticket = value;
    return this;
  }

  setCodigo(value: string): TicketResponseBuilder {
    this._codigo = value;
    return this;
  }

  setCorrelativo(value: number): TicketResponseBuilder {
    this._correlativo = value;
    return this;
  }

  setUrgente(value: boolean): TicketResponseBuilder {
    this._urgente = value;
    return this;
  }

  setIdVentanilla(value: string): TicketResponseBuilder {
    this._idVentanilla = value;
    return this;
  }

  setTipoTicket(value: ParameterValueEntity): TicketResponseBuilder {
    this._tipoTicket = value;
    return this;
  }

  setIdTipoTicket(value: string): TicketResponseBuilder {
    this._idTipoTicket = value;
    return this;
  }

  setAdministrado(value: AdministrateEntity): TicketResponseBuilder {
    this._administrado = value;
    return this;
  }

  setIdAdministrate(value: string): TicketResponseBuilder {
    this._idAdministrate = value;
    return this;
  }

  create(): TicketResponse{
    return new TicketResponse(
      this._idticket,
      this._codigo,
      this._correlativo,
      this._urgente,
      this._idVentanilla,
      this._tipoTicket,
      this._idTipoTicket,
      this._administrado,
      this._idAdministrate,
    );
  }
}
