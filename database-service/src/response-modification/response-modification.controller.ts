import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
import { RequestHandlerService } from '../request-handler/request-handler.service';

/**
 *  Controller to handle request, modify the response time, response time
 *  and semantic type. On port /response-modification
 */
@Controller('response-modification')
export class ResponseModificationController {
  constructor(
    private appService: AppService,
    private cpuUtilizationService: CpuUtilizationService,
    private requestHandler: RequestHandlerService,
  ) {}
  /**
   * the post request with its modifications of response type and response time
   * as body are checked for input data and the changes are applied
   * hence to the respective variables using the set operations
   */
  @Post()
  applyModifications(@Body() modifications): void {
    if (modifications.responseTime) {
      this.appService.setResponseTime(modifications.responseTime);
      this.requestHandler.setResponseTime(modifications.responseTime);
    }

    if (modifications.responseSuccessChecked) {
      this.appService.setResponseType(true);
    } else {
      this.appService.setResponseType(false);
    }

    if (modifications.correctResponseChecked) {
      this.requestHandler.setSemanticType(true);
    } else {
      this.requestHandler.setSemanticType(false);
    }

    if (modifications.cpuUtilizationLoad) {
      this.cpuUtilizationService.simulatedCpuLoad = modifications.cpuUtilizationLoad;
    }

    return;
  }
}
