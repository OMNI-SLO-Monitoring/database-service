"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.success = true;
        this.responseTime = 5000;
    }
    async sendResponseMessage() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this.success) {
                    res('Ok');
                }
                else {
                    rej();
                }
            }, this.responseTime);
        });
    }
    async getAccountWorth() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this.success) {
                    res(9000);
                }
                else {
                    rej();
                }
            }, this.responseTime);
        });
    }
    setResponseType(success) {
        this.success = success;
    }
    setResponseTime(newResponseTime) {
        this.responseTime = newResponseTime;
    }
    getResponseType() {
        return this.success;
    }
    getResponseTime() {
        return this.responseTime;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map