import { Controller, Get, Render, Post, Body, Redirect } from '@nestjs/common';
import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
import { RequestHandlerService } from 'src/request-handler/request-handler.service';

@Controller('response-modification')
export class ResponseModificationController {
  constructor(
    private appService: AppService,
    private cpuUtilizationService: CpuUtilizationService,
    private requestHandler: RequestHandlerService,
  ) {}

  /**
   * the UI is rendered on the given path of the controller that is 'response-modification'
   */
  @Get()
  @Render('index')
  /**
   * the modification values are be passed to the UI in which the
   * modified values are visible
   */
  root() {
    return {
      responseType: this.appService.getResponseType(),
      responseTime: this.appService.getResponseTime(),
      cpuLoad: this.cpuUtilizationService.simulatedCpuLoad,
      semanticType: this.requestHandler.semanticType,
    };
  }
  /**
   * the post request with its modifications of response type and response time
   * as body are checked for input data and the changes are applied
   * hence to the respective variables using the set operations
   */
  @Post()
  @Redirect('/response-modification')
  applyModifications(@Body() modifications): void {
    if (modifications.responseTime) {
      this.appService.setResponseTime(modifications.responseTime);
    }

    if (modifications.responseType) {
      this.appService.setResponseType(true);
    } else {
      this.appService.setResponseType(false);
    }

    if (modifications.semanticType) {
      this.requestHandler.semanticType = true;
    } else {
      this.requestHandler.semanticType = false;
    }

    if (modifications.cpuLoad) {
      this.cpuUtilizationService.simulatedCpuLoad = modifications.cpuLoad;
    }

    return;
  }
}
