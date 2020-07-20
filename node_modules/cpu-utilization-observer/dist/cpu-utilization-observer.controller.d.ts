import { CpuUtilizationService } from "./cpu-utilization.service";
/**
 * CPU Controller to show intern Value on port: /cpu.
 */
export declare class CpuUtilizationController {
    private cpuUtilizationService;
    constructor(cpuUtilizationService: CpuUtilizationService);
    fetchCPUUtilizationLoad(): Promise<number>;
    fetchSimulatedCpuUtilizationLoad(): number;
}
//# sourceMappingURL=cpu-utilization-observer.controller.d.ts.map