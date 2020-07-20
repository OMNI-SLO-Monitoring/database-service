import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
import { RequestHandlerService } from 'src/request-handler/request-handler.service';
export declare class ResponseModificationController {
    private appService;
    private cpuUtilizationService;
    private requestHandler;
    constructor(appService: AppService, cpuUtilizationService: CpuUtilizationService, requestHandler: RequestHandlerService);
    root(): {
        responseType: boolean;
        responseTime: number;
        cpuLoad: number;
        semanticType: boolean;
    };
    applyModifications(modifications: any): void;
}
