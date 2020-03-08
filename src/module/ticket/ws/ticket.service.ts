import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketServiceImpl } from './ticket.service.impl';
import { TicketResponse } from '../ui/model/response/ticket.response';
import { TicketRepository } from '../io/repository/ticket.repository';

@Injectable()
export class TicketService implements TicketServiceImpl{
  constructor(
    @InjectRepository(TicketRepository) private ticketRepository: TicketRepository,
  ) {}

  async getAllTickets(): Promise<Array<TicketResponse>>{
    return undefined;
  }
}
