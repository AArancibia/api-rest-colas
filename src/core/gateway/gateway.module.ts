import { Module } from '@nestjs/common';
import { TicketGateway } from './ticket.gateway';
import { TicketModule } from '../../module/ticket/ticket.module';

@Module({
  imports: [
    TicketModule
  ],
  providers: [
    TicketGateway
  ],
  exports: [
    TicketGateway
  ]
})
export class GatewayModule {}
