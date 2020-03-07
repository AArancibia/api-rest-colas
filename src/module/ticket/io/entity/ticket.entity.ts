import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '../../../../core/base/audit.entity';

@Entity('ticket')
export class TicketEntity extends AuditEntity{
  @PrimaryGeneratedColumn('uuid')
  idticket: string;

  @Column('varchar', {
    name: 'codigo',
    unique: true,
    nullable: false,
    comment: 'Code for the ticket. This is unique'
  })
  code: string;

  @Column('int8', {
    name: 'correlativo',
    nullable: false,
    comment: 'Correlative for the ticket.'
  })
  correlative: number;
}
