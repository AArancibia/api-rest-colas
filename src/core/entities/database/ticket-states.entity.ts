import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TicketEntity } from './ticket.entity';
import { ParameterValueEntity } from './parameter-value.entity';
import { AuditEntity } from '../base/audit.entity';

@Entity('ticket-estados')
export class TicketStatesEntity extends AuditEntity{

  @Column('uuid', {
    primary: true,
    name: 'IdTicket'
  })
  idTicket: string;

  @ManyToOne(type => TicketEntity, ticket => ticket.idticket)
  @JoinColumn({name: 'idTicket'})
  ticket: TicketEntity;

  @Column('uuid', {
    primary: true,
    name: 'IdParameterValue'
  })
  idParameterValue: string;

  @ManyToOne(type => ParameterValueEntity, parameterValue=> parameterValue.idParameterValue)
  @JoinColumn({name: 'idParameterValue'})
  parameterValue: ParameterValueEntity;
}
