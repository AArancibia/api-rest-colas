import { Controller, Get } from '@nestjs/common';
import { TicketService } from '../ws/ticket.service';
import { TicketResponse } from './model/response/ticket.response';

@Controller('ticket')
export class TicketController {
  constructor(
    private ticketSrv: TicketService
  ) {}

  @Get()
  getAllTickets(): Array<TicketResponse>{
    return this.ticketSrv.getAllTickets();
  }
}
