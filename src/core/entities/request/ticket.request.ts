export class TicketRequest{
  idTicket: string;
  codigo: string;
  correlativo: number;
  urgente: boolean;
  idVentanilla: string;
  idTipoTicket: string;
  idAdministrado: string;

  constructor(idticket: string, codigo: string, correlativo: number, urgente: boolean, idVentanilla: string, idTipoTicket: string, idAdministrado: string) {
    this.idTicket = idticket;
    this.codigo = codigo;
    this.correlativo = correlativo;
    this.urgente = urgente;
    this.idVentanilla = idVentanilla;
    this.idTipoTicket = idTipoTicket;
    this.idAdministrado = idAdministrado;
  }
}
