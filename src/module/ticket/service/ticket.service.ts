import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketServiceImpl } from './ticket.service.impl';
import { TicketResponse } from '../../../core/entities/response/ticket.response';
import { TicketRepository } from '../repository/ticket.repository';
import { TicketMapper } from '../../../core/mapper/ticket.mapper';
import { TicketRequest } from '../../../core/entities/request/ticket.request';
import { TicketEntity } from '../../../core/entities/database/ticket.entity';
import { AdministrateService } from '../../administrate/service/administrate.service';
import { DateHelper } from '../../../common/utils/DateHelper';
import { ParameterValueRepository } from '../../parameter/repository/parameter-value.repository';
import { ParameterService } from '../../parameter/service/parameter.service';
import { ParameterValueEntity } from '../../../core/entities/database/parameter-value.entity';
import { ParameterValueService } from '../../parameter/service/parameter-value.service';
import { Between } from 'typeorm';
import { TicketGateway } from '../../../core/gateway/ticket.gateway';

@Injectable()
export class TicketService implements TicketServiceImpl{
  constructor(
    @InjectRepository(TicketRepository) private ticketRepository: TicketRepository,
    private adminisrateSrv: AdministrateService,
    private parameterValueSrv: ParameterValueService,
    private ticketMapper: TicketMapper,
    private ticketGateway: TicketGateway,
  ) {}

  async getAllTickets(): Promise<Array<TicketResponse>>{
    const tickets = await this.ticketRepository.findTicketsByCurrentDate();
    return this.ticketMapper.mapperFromListEntityToRo(tickets)
  }

  async saveTickets(ticketRequest: Array<TicketRequest>): Promise<Array<TicketResponse>> {
    const ticketsEntity: TicketEntity[] = this.ticketMapper.mapperFromListDtoToEntity(ticketRequest);
    const ticketsSaved: TicketEntity[] = [];
    for (let i = 0; i < ticketsEntity.length; i++){
      const currentTicket = ticketsEntity[i];
      const administrate = await this.adminisrateSrv.getAdministrateById(currentTicket.idAdministrate);
      const correlative = await this.getCorrelative(currentTicket.idTicketType);
      const ticketType = await this.parameterValueSrv.getParameterValueById(currentTicket.idTicketType);
      const code = `${currentTicket.urgent ? 'U' : ''}${ticketType.name.substring(0,1)}-${correlative}`;
      const ticketCreated = await this.ticketRepository.save({
        ...currentTicket,
        ticketType,
        administrate,
        correlative,
        code
      });
      ticketsSaved.push(ticketCreated);
    }
    const ticketsToRO = this.ticketMapper.mapperFromListEntityToRo(ticketsSaved);
    this.ticketGateway.server.emit('[TICKET] NEW TICKETS', ticketsToRO);
    return ticketsToRO;
  }


  async getCorrelative(
    idTicketType: string
  ): Promise<number> {
    const lastCorrelative = await this.ticketRepository.findOne(
      {
        where: {
          idTicketType,
          created: Between(
            DateHelper.dateToStringFormat(DateHelper.getCurrentDate(), 'YYYY-MM-DD'),
            DateHelper.dateToStringFormat(DateHelper.addDays(DateHelper.getCurrentDate(), 1), 'YYYY-MM-DD')
          )
        },
        select: ['correlative'],
        order: { created: 'DESC' }
      }
    );
    let correlativeReturn: number = lastCorrelative ? Number(lastCorrelative.correlative) : 0;
    correlativeReturn++;
    return correlativeReturn;
  }

}
