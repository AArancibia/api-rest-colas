import { TicketResponse } from '../ui/model/response/ticket.response';

export interface TicketServiceImpl {
  getAllTickets(): Array<TicketResponse>;
}
