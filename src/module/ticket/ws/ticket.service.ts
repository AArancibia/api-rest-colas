import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketServiceImpl } from './ticket.service.impl';
import { TicketResponse } from '../ui/model/response/ticket.response';
import { TicketRepository } from '../io/repository/ticket.repository';
import { TicketMapper } from '../../../core/mapper/ticket.mapper';
import { TicketRequest } from '../ui/model/request/ticket.request';
import { TicketEntity } from '../io/entity/ticket.entity';

@Injectable()
export class TicketService implements TicketServiceImpl{
  constructor(
    @InjectRepository(TicketRepository) private ticketRepository: TicketRepository,
    private ticketMapper: TicketMapper,
  ) {}

  async getAllTickets(): Promise<Array<TicketResponse>>{
    const tickets = await this.ticketRepository.find();
    return this.ticketMapper.mapperFromListEntityToRo(tickets)
  }

  saveTickets(ticketRequest: Array<TicketRequest>): Promise<Array<TicketResponse>> {
    const ticketEntity: TicketEntity[] = this.ticketMapper.mapperFromListDtoToEntity(ticketRequest);
    console.log(ticketEntity);
    return undefined;
  }

}
