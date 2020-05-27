import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './controller/ticket.controller';
import { TicketService } from './service/ticket.service';
import { TicketEntity } from '../../core/entities/database/ticket.entity';
import { TicketRepository } from './repository/ticket.repository';
import { TicketMapper } from '../../core/mapper/ticket.mapper';
import { AdministrateModule } from '../administrate/administrate.module';
import { ParameterModule } from '../parameter/parameter.module';
import { GatewayModule } from '../../core/gateway/gateway.module';
import { TicketGateway } from '../../core/gateway/ticket.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketEntity, TicketRepository]),
    AdministrateModule,
    ParameterModule,
    GatewayModule
  ],
  controllers: [TicketController],
  providers: [TicketService, TicketMapper],
  exports: [TicketService]
})
export class TicketModule {}
