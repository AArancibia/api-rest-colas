import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrateController } from './ui/controller/administrate.controller';
import { AdministrateService } from './ws/administrate.service';
import { AdministrateEntity } from './io/entity/administrate.entity';
import { AdministrateRepository } from './io/repository/administrate.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdministrateEntity, AdministrateRepository])
  ],
  controllers: [AdministrateController],
  providers: [AdministrateService],
  exports: [AdministrateService]
})
export class AdministrateModule {}
