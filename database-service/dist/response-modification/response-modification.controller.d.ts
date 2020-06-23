import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
export declare class ResponseModificationController {
    private appService;
    private cpuUtilizationService;
    constructor(appService: AppService, cpuUtilizationService: CpuUtilizationService);
    root(): {
        responseType: boolean;
        responseTime: number;
        cpuLoad: number;
    };
    applyModifications(modifications: any): void;
}
