import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketService } from '../service/ticket.service';
import { TicketResponse } from '../../../core/entities/response/ticket.response';
import { TicketRequest } from '../../../core/entities/request/ticket.request';

@Controller('tickets')
export class TicketController {
  constructor(
    private ticketSrv: TicketService
  ) {}

  @Get()
  getAllTickets(): Promise<Array<TicketResponse>>{
    return this.ticketSrv.getAllTickets();
  }

  @Post()
  saveTicket(
    @Body() ticketRequest: Array<TicketRequest>
  ): Promise<TicketResponse[]>{
    return this.ticketSrv.saveTickets(ticketRequest);
  }
}
