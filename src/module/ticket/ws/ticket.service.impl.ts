import { TicketResponse } from '../ui/model/response/ticket.response';
import { TicketRequest } from '../ui/model/request/ticket.request';

export interface TicketServiceImpl {
  getAllTickets(): Promise<Array<TicketResponse>>;
  saveTickets(ticketRequest: Array<TicketRequest>): Promise<Array<TicketResponse>>;
}
