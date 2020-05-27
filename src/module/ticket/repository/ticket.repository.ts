import { Between, EntityRepository, Repository } from 'typeorm';
import { TicketEntity } from '../../../core/entities/database/ticket.entity';
import { DateHelper } from '../../../common/utils/DateHelper';

@EntityRepository(TicketEntity)
export class TicketRepository
  extends Repository<TicketEntity>{

  async findTicketsByCurrentDate(): Promise<Array<TicketEntity>>{
    const tickets = await this.find({
      relations: ['administrate', 'ticketType'],
      where: {
        created: Between(
          DateHelper.dateToStringFormat(DateHelper.getCurrentDate(), 'YYYY-MM-DD'),
          DateHelper.dateToStringFormat(DateHelper.addDays(DateHelper.getCurrentDate(), 1), 'YYYY-MM-DD')
        )
      }
    });
    return tickets;
  }
}
