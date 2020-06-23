import { Injectable } from '@nestjs/common';
import  * as os from 'os';

/**
 * Injectable Class to change the CPU-Load via the UI. 
 */
@Injectable()
export class CpuUtilizationService {

  simulatedCpuLoad = 60;

  //returns the current cpu load of the database service
  async getCpuLoad(): Promise<number> {
    return this.recordCpuUsage();
    // return this.cpuLoad;
  }

  // Credit: https://gist.github.com/bag-man/5570809
  private async recordCpuUsage(): Promise<number> {
    //Grab first CPU Measure
    const startMeasure = this.cpuAverage();
    
    return await new Promise<number>((res, rej) => {
      //Set delay for second Measure
      setTimeout(() => { 
      
        //Grab second Measure
        const endMeasure = this.cpuAverage(); 
      
        //Calculate the difference in idle and total time between the measures
        const idleDifference = endMeasure.idle - startMeasure.idle;
        const totalDifference = endMeasure.total - startMeasure.total;
      
        //Calculate the average percentage CPU usage
        const percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);
      
        //Output result to console
        console.log(percentageCPU + "% CPU Usage.");

        res(percentageCPU);
      
      }, 100);
    })
  }

  // Create function to get CPU information
  private cpuAverage() {
    const cpus = os.cpus();
  
    //Initialise sum of idle and time of cores and fetch CPU info
    let totalIdle = 0;
    let totalTick = 0;
  
    //Loop through CPU cores
    for(var i = 0, len = cpus.length; i < len; i++) {
  
      //Select CPU core
      var cpu: os.CpuInfo = cpus[i];
  
      //Total up the time in the cores tick
      for(const type in cpu.times) {
        totalTick += cpu.times[type];
      }     
  
      //Total up the idle time of the core
      totalIdle += cpu.times.idle;
    }
  
    //Return the average Idle and Tick times
    return { idle: totalIdle / cpus.length, total: totalTick / cpus.length};
  }

}


