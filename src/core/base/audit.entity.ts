import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditEntity{
  @Column('uuid', {
    name: 'IdUsuarioRegistro',
    nullable: true,
  })
  idUserRegister: string;

  @Column('uuid', {
    name: 'IdUsuarioModifico',
    nullable: true,
  })
  idUserModified: string;

  @CreateDateColumn({
    name: 'FechaRegistro',
  })
  created: Date;

  @UpdateDateColumn({
    name: 'FechaModifico',
  })
  updated: Date;

  @Column('boolean', {
    name: 'Eliminado',
    default: false
  })
  deleted: boolean;
}
