import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketGateway } from './ticket.gateway';
import { TicketModule } from '../../module/ticket/ticket.module';
import { TicketService } from '../../module/ticket/service/ticket.service';
import { InitGateway } from './init.gateway';
import { TicketRepository } from '../../module/ticket/repository/ticket.repository';
import { TicketMapper } from '../mapper/ticket.mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketRepository])
  ],
  providers: [
    TicketGateway,
    InitGateway,
    TicketMapper
  ],
  exports: [
    TicketGateway,
    InitGateway
  ]
})
export class GatewayModule {}
