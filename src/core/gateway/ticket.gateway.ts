import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TicketService } from '../../module/ticket/ws/ticket.service';

@WebSocketGateway(8091, {
  namespace: 'ticket',
})
export class TicketGateway {
  @WebSocketServer() server: Server;

  constructor(
    private ticketSrv: TicketService
  ) {}

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    return client.id;
  }
}
