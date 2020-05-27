import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from '../module/ticket/ticket.module';
import { ParameterModule } from '../module/parameter/parameter.module';
import { GatewayModule } from '../core/gateway/gateway.module';
import { InitGateway } from '../core/gateway/init.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TicketModule,
    ParameterModule,
    GatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
