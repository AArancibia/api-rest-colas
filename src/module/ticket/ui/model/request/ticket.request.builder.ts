import { TicketResponse } from '../response/ticket.response';
import { TicketRequest } from './ticket.request';

export class TicketRequestBuilder {
  private _idticket: string;
  private _codigo: string;
  private _correlativo: number;
  private _urgente: boolean;
  private _idVentanilla: string;
  private _idTipoTicket: string;
  private _idAdministrado: string;

  setIdticket(value: string): TicketRequestBuilder {
    this._idticket = value;
    return this;
  }

  setCodigo(value: string): TicketRequestBuilder {
    this._codigo = value;
    return this;
  }

  setCorrelativo(value: number): TicketRequestBuilder {
    this._correlativo = value;
    return this;
  }

  setUrgente(value: boolean): TicketRequestBuilder {
    this._urgente = value;
    return this;
  }

  setIdVentanilla(value: string): TicketRequestBuilder {
    this._idVentanilla = value;
    return this;
  }

  setIdTipoTicket(value: string): TicketRequestBuilder {
    this._idTipoTicket = value;
    return this;
  }

  setIdAdministrado(value: string): TicketRequestBuilder {
    this._idAdministrado = value;
    return this;
  }

  create(): TicketRequest {
    return new TicketRequest(
      this._idticket,
      this._codigo,
      this._correlativo,
      this._urgente,
      this._idVentanilla,
      this._idTipoTicket,
      this._idAdministrado,
    )
  }
}
