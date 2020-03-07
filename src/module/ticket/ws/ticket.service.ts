import { Injectable } from '@nestjs/common';
import { TicketServiceImpl } from './ticket.service.impl';
import { TicketResponse } from '../ui/model/response/ticket.response';

@Injectable()
export class TicketService implements TicketServiceImpl{
  constructor() {}

  getAllTickets(): Array<TicketResponse> {
    return undefined;
  }
}
