import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ui/ticket.controller';
import { TicketService } from './ws/ticket.service';
import { TicketEntity } from './io/entity/ticket.entity';
import { TicketRepository } from './io/repository/ticket.repository';
import { TicketMapper } from '../../core/mapper/ticket.mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketEntity, TicketRepository])
  ],
  controllers: [TicketController],
  providers: [TicketService, TicketMapper]
})
export class TicketModule {}
