export class TicketResponse {
  idTicket: string;
  correlativo: number;
  codigo: string;

  constructor(idTicket: string, correlativo: number, codigo: string) {
    this.idTicket = idTicket;
    this.correlativo = correlativo;
    this.codigo = codigo;
  }
}
