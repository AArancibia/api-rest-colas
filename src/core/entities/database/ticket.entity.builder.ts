import { TicketEntity } from './ticket.entity';

export class TicketEntityBuilder{
  private _idticket: string;
  private _code: string;
  private _correlative: number;
  private _urgent: boolean;
  private _idWindow: string;
  private _idTicketType: string;
  private _idAdministrate: string;

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

  setUrgent(value: boolean): TicketEntityBuilder {
    this._urgent = value;
    return this;
  }

  setIdWindow(value: string): TicketEntityBuilder {
    this._idWindow = value;
    return this;
  }

  setIdTicketType(value: string): TicketEntityBuilder {
    this._idTicketType = value;
    return this;
  }

  setIdAdministrate(value: string): TicketEntityBuilder {
    this._idAdministrate = value;
    return this;
  }

  create(): TicketEntity{
    return new TicketEntity(
      this._idticket,
      this._code,
      this._correlative,
      this._urgent,
      this._idWindow,
      this._idTicketType,
      this._idAdministrate
    );
  }
}
