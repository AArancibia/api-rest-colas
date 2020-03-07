import { Module } from '@nestjs/common';
import { TicketController } from './ui/ticket.controller';
import { TicketService } from './ws/ticket.service';

@Module({
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
