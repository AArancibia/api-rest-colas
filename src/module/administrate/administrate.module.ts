import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrateController } from './controller/administrate.controller';
import { AdministrateService } from './service/administrate.service';
import { AdministrateEntity } from '../../core/entities/database/administrate.entity';
import { AdministrateRepository } from './repository/administrate.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdministrateEntity, AdministrateRepository])
  ],
  controllers: [AdministrateController],
  providers: [AdministrateService],
  exports: [AdministrateService]
})
export class AdministrateModule {}
