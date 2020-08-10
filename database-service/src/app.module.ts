import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseModificationController } from './response-modification/response-modification.controller';
import { CpuUtilizationModule } from 'cpu-utilization-observer';
import { RequestHandlerModule } from './request-handler/request-handler.module';
import {ConfigModule } from '@nestjs/config';

@Module({
  imports: [CpuUtilizationModule, RequestHandlerModule, ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController, ResponseModificationController],
  providers: [AppService],
})
export class AppModule {}
