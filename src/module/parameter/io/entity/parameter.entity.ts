import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditEntity } from '../../../../core/base/audit.entity';

@Entity('parametro')
export class ParameterEntity extends AuditEntity {
  @Column('varchar', {
    name: 'IdParametro',
    length: 4,
    unique: true,
    primary: true,
  })
  idParameter: string;

  @Column('varchar', {
    name: 'Descripcion'
  })
  description: string;


  constructor(idParameter: string, description: string) {
    super();
    this.idParameter = idParameter;
    this.description = description;
  }
}
