import { TicketEntity } from './ticket.entity';

export class TicketEntityBuilder{
  private _idticket: string;
  private _code: string;
  private _correlative: number;

  setIdticket(value: string): TicketEntityBuilder {
    this._idticket = value;
    return this;
  }

  setCode(value: string): TicketEntityBuilder {
    this._code = value;
    return this;
  }

  setCorrelative(value: number): TicketEntityBuilder {
    this._correlative = value;
    return this;
  }

  create(): TicketEntity{
    return new TicketEntity(
      this._idticket,
      this._code,
      this._correlative
    );
  }
}
