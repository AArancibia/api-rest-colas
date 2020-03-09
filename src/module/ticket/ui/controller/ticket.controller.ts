import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketService } from '../../ws/ticket.service';
import { TicketResponse } from '../model/response/ticket.response';
import { TicketRequest } from '../model/request/ticket.request';

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
