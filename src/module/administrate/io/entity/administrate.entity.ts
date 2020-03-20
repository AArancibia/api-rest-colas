import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('administrado')
export class AdministrateEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'IdAdministrado'
  })
  idAdministrate: string;

  @Column('varchar', {
    name: 'Nombres'
  })
  name: string;

  @Column('varchar', {
    name: 'Apellidos'
  })
  lastName: string;

  @Column('varchar', {
    name: 'NumeroDocumento',
    length: 8
  })
  numberDocument: string;

}
