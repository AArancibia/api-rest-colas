import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ui/controller/ticket.controller';
import { TicketService } from './ws/ticket.service';
import { TicketEntity } from './io/entity/ticket.entity';
import { TicketRepository } from './io/repository/ticket.repository';
import { TicketMapper } from '../../core/mapper/ticket.mapper';
import { AdministrateModule } from '../administrate/administrate.module';
import { ParameterModule } from '../parameter/parameter.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TicketEntity, TicketRepository]),
    AdministrateModule,
    ParameterModule,
  ],
  controllers: [TicketController],
  providers: [TicketService, TicketMapper]
})
export class TicketModule {}
