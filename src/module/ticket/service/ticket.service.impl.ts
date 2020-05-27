import { TicketResponse } from '../../../core/entities/response/ticket.response';
import { TicketRequest } from '../../../core/entities/request/ticket.request';

export interface TicketServiceImpl {
  getAllTickets(): Promise<Array<TicketResponse>>;
  saveTickets(ticketRequest: Array<TicketRequest>): Promise<Array<TicketResponse>>;
}
