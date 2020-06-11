import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseModificationController } from './response-modification/response-modification.controller';
import { CpuUtilizationModule } from 'cpu-utilization-observer';

@Module({
  imports: [
    CpuUtilizationModule
  ],
  controllers: [
    AppController,
    ResponseModificationController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
