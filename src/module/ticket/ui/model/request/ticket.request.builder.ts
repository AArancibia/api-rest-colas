import { TicketResponse } from '../response/ticket.response';

export class TicketRequestBuilder {
  private _idticket: string;
  private _codigo: string;
  private _correlativo: number;

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

  create(): TicketResponse {
    return new TicketResponse(
      this._idticket,
      this._codigo,
      this._correlativo,
    )
  }
}
