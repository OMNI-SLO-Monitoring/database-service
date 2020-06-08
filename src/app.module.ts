import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuUtilizationController } from './cpu-utilization/cpu-utilization.controller';
import { CpuUtilizationModule } from './cpu-utilization/cpu-utilization.module';
import { ResponseModificationController } from './response-modification/response-modification.controller';

@Module({
  imports: [CpuUtilizationModule],
  controllers: [AppController, CpuUtilizationController, ResponseModificationController],
  providers: [AppService],
})
export class AppModule {}
