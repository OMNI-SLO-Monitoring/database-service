"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuUtilizationController = void 0;
const common_1 = require("@nestjs/common");
const cpu_utilization_service_1 = require("./cpu-utilization.service");
/**
 * CPU Controller to show intern Value on port: /cpu.
 */
let CpuUtilizationController = class CpuUtilizationController {
    constructor(cpuUtilizationService) {
        this.cpuUtilizationService = cpuUtilizationService;
    }
    async fetchCPUUtilizationLoad() {
        return this.cpuUtilizationService.getCpuLoad();
    }
    fetchSimulatedCpuUtilizationLoad() {
        return this.cpuUtilizationService.simulatedCpuLoad;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CpuUtilizationController.prototype, "fetchCPUUtilizationLoad", null);
__decorate([
    common_1.Get('simulated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CpuUtilizationController.prototype, "fetchSimulatedCpuUtilizationLoad", null);
CpuUtilizationController = __decorate([
    common_1.Controller('cpu'),
    __metadata("design:paramtypes", [cpu_utilization_service_1.CpuUtilizationService])
], CpuUtilizationController);
exports.CpuUtilizationController = CpuUtilizationController;
//# sourceMappingURL=cpu-utilization-observer.controller.js.map