import { TicketResponse } from './ticket.response';

export class TicketResponseBuilder{
  private _idticket: string;
  private _codigo: string;
  private _correlativo: number;


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

  create(): TicketResponse{
    return new TicketResponse(
      this._idticket,
      this._codigo,
      this._correlativo
    );
  }
}
