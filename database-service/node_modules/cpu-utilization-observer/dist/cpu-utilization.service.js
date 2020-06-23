"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuUtilizationService = void 0;
const common_1 = require("@nestjs/common");
const os = __importStar(require("os"));
/**
 * Injectable Class to change the CPU-Load via the UI.
 */
let CpuUtilizationService = class CpuUtilizationService {
    constructor() {
        this.simulatedCpuLoad = 60;
    }
    //returns the current cpu load of the database service
    async getCpuLoad() {
        return this.recordCpuUsage();
        // return this.cpuLoad;
    }
    // Credit: https://gist.github.com/bag-man/5570809
    async recordCpuUsage() {
        //Grab first CPU Measure
        const startMeasure = this.cpuAverage();
        return await new Promise((res, rej) => {
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
        });
    }
    // Create function to get CPU information
    cpuAverage() {
        const cpus = os.cpus();
        //Initialise sum of idle and time of cores and fetch CPU info
        let totalIdle = 0;
        let totalTick = 0;
        //Loop through CPU cores
        for (var i = 0, len = cpus.length; i < len; i++) {
            //Select CPU core
            var cpu = cpus[i];
            //Total up the time in the cores tick
            for (const type in cpu.times) {
                totalTick += cpu.times[type];
            }
            //Total up the idle time of the core
            totalIdle += cpu.times.idle;
        }
        //Return the average Idle and Tick times
        return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
    }
};
CpuUtilizationService = __decorate([
    common_1.Injectable()
], CpuUtilizationService);
exports.CpuUtilizationService = CpuUtilizationService;
//# sourceMappingURL=cpu-utilization.service.js.map