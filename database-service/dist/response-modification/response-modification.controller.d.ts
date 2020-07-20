import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
import { RequestHandlerService } from '../request-handler/request-handler.service';
export declare class ResponseModificationController {
    private appService;
    private cpuUtilizationService;
    private requestHandler;
    constructor(appService: AppService, cpuUtilizationService: CpuUtilizationService, requestHandler: RequestHandlerService);
    applyModifications(modifications: any): void;
}
