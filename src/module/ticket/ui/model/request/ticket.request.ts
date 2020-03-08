export class TicketRequest{
  idticket: string;
  codigo: string;
  correlativo: number;

  constructor(idticket: string, codigo: string, correlativo: number) {
    this.idticket = idticket;
    this.codigo = codigo;
    this.correlativo = correlativo;
  }
}
