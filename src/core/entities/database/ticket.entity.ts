import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '../base/audit.entity';
import { ParameterValueEntity } from './parameter-value.entity';
import { TicketStatesEntity } from './ticket-states.entity';
import { AdministrateEntity } from './administrate.entity';

@Entity('ticket')
export class TicketEntity extends AuditEntity{
  @PrimaryGeneratedColumn('uuid', {
    name: 'IdTicket'
  })
  idticket: string;

  @Column('varchar', {
    name: 'Codigo',
    nullable: true,
    comment: 'Code for the ticket. This is unique in the day'
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

  @Column('varchar', {
    name: 'IdVentanilla',
    nullable: true
  })
  idWindow: string;

  @ManyToOne(type => ParameterValueEntity, parameterValue => parameterValue.idParameterValue)
  @JoinColumn({name: 'IdTipoTicket'})
  ticketType: ParameterValueEntity;

  @Column('varchar', {
    name: 'IdTipoTicket',
    nullable: true
  })
  idTicketType: string;

  @ManyToOne(type => AdministrateEntity, administrate => administrate.idAdministrate)
  @JoinColumn({name: 'IdAdministrado'})
  administrate: AdministrateEntity;

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