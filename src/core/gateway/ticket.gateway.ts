import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { InjectRepository } from '@nestjs/typeorm';
import { Server, Socket } from 'socket.io';
import { TicketService } from '../../module/ticket/service/ticket.service';
import { TicketResponse } from '../entities/response/ticket.response';
import { TicketRequest } from '../entities/request/ticket.request';
import { TicketRepository } from '../../module/ticket/repository/ticket.repository';
import { TicketMapper } from '../mapper/ticket.mapper';

@WebSocketGateway(8091, {
  namespace: 'ticket',
})
export class TicketGateway implements OnGatewayConnection{
  @WebSocketServer() server: Server;

  constructor(
    @InjectRepository(TicketRepository) private ticketRepository: TicketRepository,
    private ticketMapper: TicketMapper,
  ) {}

  async handleConnection(client: Socket, ...args: any[]): Promise<string> {
    const tickets = await this.ticketRepository.findTicketsByCurrentDate();
    this.server.emit('[TICKET] GET TICKETS', this.ticketMapper.mapperFromListEntityToRo(tickets));
    return client.id;
  }

  @SubscribeMessage('[TICKET] SAVE TICKETS')
  SocketNewTicket(client: Socket, payload: Array<TicketRequest>): void {//Promise<Array<TicketResponse>>
   // const tickets = await this.ticketSrv.saveTickets(payload);
    //this.server.emit('[TICKET] NEW TICKETS', tickets);
    //client.emit('[TICKET] GENERATED TICKET', tickets); --> void
    //return tickets;
  }
}
