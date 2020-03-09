import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TicketStatesEntity } from '../../../ticket/io/entity/ticket-states.entity';
import { ParameterEntity } from './parameter.entity';

@Entity('parameter-value')
export class ParameterValueEntity{
  @Column('varchar', {
    name: 'IdParametroValor',
    length: 8,
    primary: true,
  })
  idParameterValue: string;

  @ManyToOne(type => ParameterEntity, parameter => parameter.idParameter)
  @JoinColumn({name: 'IdParametro'})
  parameter: ParameterEntity;

  @Column('varchar', {
    name: 'IdParametro',
  })
  idParameter: string;

  @Column('varchar', {
    name: 'Nombre'
  })
  name: string;

  @Column('varchar', {
    name: 'ValorAdicional',
    nullable: true
  })
  additionalValue: string;

  @Column('varchar', {
    name: 'ValorAdicional2',
    nullable: true
  })
  additionalValue2: string;

  @Column('varchar', {
    name: 'Descripcion'
  })
  description: string;

  @OneToMany(type => TicketStatesEntity, ticketStates => ticketStates.idParameterValue)
  ticketStates: TicketStatesEntity[];

}
