import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketServiceImpl } from './ticket.service.impl';
import { TicketResponse } from '../ui/model/response/ticket.response';
import { TicketRepository } from '../io/repository/ticket.repository';
import { TicketMapper } from '../../../core/mapper/ticket.mapper';
import { TicketRequest } from '../ui/model/request/ticket.request';
import { TicketEntity } from '../io/entity/ticket.entity';
import { AdministrateService } from '../../administrate/ws/administrate.service';
import { DateHelper } from '../../../common/utils/DateHelper';
import { ParameterValueRepository } from '../../parameter/io/repository/parameter-value.repository';
import { ParameterService } from '../../parameter/ws/parameter.service';
import { ParameterValueEntity } from '../../parameter/io/entity/parameter-value.entity';
import { ParameterValueService } from '../../parameter/ws/parameter-value.service';

@Injectable()
export class TicketService implements TicketServiceImpl{
  constructor(
    @InjectRepository(TicketRepository) private ticketRepository: TicketRepository,
    private adminisrateSrv: AdministrateService,
    private parameterValueSrv: ParameterValueService,
    private ticketMapper: TicketMapper,
  ) {}

  async getAllTickets(): Promise<Array<TicketResponse>>{
    const tickets = await this.ticketRepository.find();
    return this.ticketMapper.mapperFromListEntityToRo(tickets)
  }

  async saveTickets(ticketRequest: Array<TicketRequest>): Promise<Array<TicketResponse>> {
    const ticketsEntity: TicketEntity[] = this.ticketMapper.mapperFromListDtoToEntity(ticketRequest);
    const ticketsSaved: TicketEntity[] = [];
    for (let i = 0; i < ticketsEntity.length; i++){
      const currentTicket = ticketsEntity[i];
      const administrate = await this.adminisrateSrv.getAdministrateById(currentTicket.idAdministrate);
      const correlative = await this.getCorrelative(currentTicket.idTicketType);
      const { name } = await this.parameterValueSrv.getParameterValueById(currentTicket.idTicketType);
      const code = `${name}-${correlative}`;
      const ticketCreated = await this.ticketRepository.save({
        ...currentTicket,
        administrate,
        correlative,
        code
      });
      ticketsSaved.push(ticketCreated);
    }
    return this.ticketMapper.mapperFromListEntityToRo(ticketsSaved);
  }

  async getCorrelative(
    idTicketType: string
  ): Promise<number> {
    console.log(idTicketType);
    const lastCorrelative = await this.ticketRepository.findOne(
      {
        where: {
          idTicketType,
          created: DateHelper.dateToStringFormat(new Date(), 'YYYY-MM-DD')
        },
        select: ['correlative'],
        order: { correlative: 1 }
      }
    );
    return lastCorrelative ? lastCorrelative.correlative++ : 1;
  }

}
