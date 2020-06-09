import { Controller, Get } from '@nestjs/common';
import { CpuUtilizationService } from './cpu-utilization.service';

/**
 * CPU Controller to show intern Value on port: /cpu. 
 */
@Controller('cpu')
export class CpuUtilizationController {
  constructor(private cpuUtilizationService: CpuUtilizationService) {}
  @Get()
  fetchCPUUtilizationLoad() {
    return this.cpuUtilizationService.getCpuLoad();
  }
}
