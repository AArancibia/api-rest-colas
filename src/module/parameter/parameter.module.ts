import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterController } from './controller/parameter.controller';
import { ParameterService } from './service/parameter.service';
import { ParameterEntity } from '../../core/entities/database/parameter.entity';
import { ParameterValueController } from './controller/parameter-value.controller';
import { ParameterValueService } from './service/parameter-value.service';
import { ParameterValueRepository } from './repository/parameter-value.repository';
import { ParameterValueEntity } from '../../core/entities/database/parameter-value.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ParameterEntity, ParameterValueEntity, ParameterValueRepository])
  ],
  controllers: [ParameterController, ParameterValueController],
  providers: [ParameterService, ParameterValueService],
  exports: [ParameterService, ParameterValueService]
})
export class ParameterModule {}
