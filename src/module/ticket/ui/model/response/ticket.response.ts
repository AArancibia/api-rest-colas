export class TicketResponse {
  idTicket: string;
  codigo: string;
  correlativo: number;

  constructor(idTicket: string, codigo: string, correlativo: number) {
    this.idTicket = idTicket;
    this.codigo = codigo;
    this.correlativo = correlativo;
  }
}
