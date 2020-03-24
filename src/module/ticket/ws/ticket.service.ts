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
import { Between } from 'typeorm';

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
      const ticketType = await this.parameterValueSrv.getParameterValueById(currentTicket.idTicketType);
      const code = `${ticketType.name.substring(0,1)}-${correlative}`;
      const ticketCreated = await this.ticketRepository.save({
        ...currentTicket,
        ticketType,
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
