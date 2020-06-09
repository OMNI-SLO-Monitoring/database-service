import { Injectable } from '@nestjs/common';

/**
 * Injectable Class to change the CPU-Load via the UI. 
 */
@Injectable()
export class CpuUtilizationService {
  //default value for cpu load is 70
  private cpuLoad: number = 70;

  //returns the current cpu load of the database service
  getCpuLoad(): number {
    return this.cpuLoad;
  }

  //Sets the cpuLoad to given Number.
  setCpuLoad(newCpuLoad: number): void {
    this.cpuLoad = newCpuLoad;
  }
}
