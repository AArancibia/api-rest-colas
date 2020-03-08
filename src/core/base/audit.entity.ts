import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditEntity{
  @Column('uuid', {
    name: 'idUsuarioRegistro',
    nullable: true,
  })
  idUserRegister: string;

  @Column('uuid', {
    name: 'idUsuarioModifico',
    nullable: true,
  })
  idUserModified: string;

  @CreateDateColumn({
    name: 'fechaRegistro',
  })
  created: Date;

  @UpdateDateColumn({
    name: 'fechaModifico',
  })
  updated: Date;

  @Column('boolean', {
    name: 'eliminado',
    default: false
  })
  deleted: boolean;
}
