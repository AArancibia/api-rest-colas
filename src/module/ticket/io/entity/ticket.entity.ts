import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '../../../../core/base/audit.entity';
import { ParameterValueEntity } from '../../../parameter/io/entity/parameter-value.entity';
import { TicketStatesEntity } from './ticket-states.entity';

@Entity('ticket')
export class TicketEntity extends AuditEntity{
  @PrimaryGeneratedColumn('uuid', {
    name: 'IdTicket'
  })
  idticket: string;

  @Column('varchar', {
    name: 'Codigo',
    unique: true,
    nullable: true,
    comment: 'Code for the ticket. This is unique'
  })
  code: string;

  @Column('int8', {
    name: 'Correlativo',
    nullable: true,
    comment: 'Correlative for the ticket.'
  })
  correlative: number;

  @Column('boolean', {
    name: 'Urgente',
    nullable: true,
    comment: 'Camp to see is urgent or not'
  })
  urgent: boolean;

  @ManyToOne(type => ParameterValueEntity, parameterValue => parameterValue.idParameterValue)
  @JoinColumn({name: 'idWindow'})
  window: ParameterValueEntity;

  @Column('int8', {
    name: 'IdVentanilla',
    nullable: true
  })
  idWindow: string;

  @ManyToOne(type => ParameterValueEntity, parameterValue => parameterValue.idParameterValue)
  @JoinColumn({name: 'idTicketType'})
  ticketType: ParameterValueEntity;

  @Column('int8', {
    name: 'IdTipoTicket',
    nullable: true
  })
  idTicketType: string;

  @Column('uuid', {
    name: 'IdAdministrado',
    nullable: true
  })
  idAdministrate: string;

  @OneToMany(type => TicketStatesEntity, ticketStates => ticketStates.idTicket)
  ticketStates: TicketStatesEntity[];


  constructor(idticket: string, code: string, correlative: number, urgent: boolean, idWindow: string, idTicketType: string, idAdministrate: string) {
    super();
    this.idticket = idticket;
    this.code = code;
    this.correlative = correlative;
    this.urgent = urgent;
    this.idWindow = idWindow;
    this.idTicketType = idTicketType;
    this.idAdministrate = idAdministrate;
  }
}
