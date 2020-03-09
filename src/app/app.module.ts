import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from '../module/ticket/ticket.module';
import { ParameterModule } from '../module/parameter/parameter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TicketModule,
    ParameterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
