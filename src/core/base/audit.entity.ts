import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditEntity{
  @Column('uuid')
  idUserCreated: string;

  @Column('uuid')
  idUserRegister: string;

  @CreateDateColumn()
  creadted: Date;

  @UpdateDateColumn()
  updated: Date;
}
