import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParameterController } from './ui/controller/parameter.controller';
import { ParameterService } from './ws/parameter.service';
import { ParameterEntity } from './io/entity/parameter.entity';
import { ParameterValueController } from './ui/controller/parameter-value.controller';
import { ParameterValueService } from './ws/parameter-value.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ParameterEntity])
  ],
  controllers: [ParameterController, ParameterValueController],
  providers: [ParameterService, ParameterValueService]
})
export class ParameterModule {}
