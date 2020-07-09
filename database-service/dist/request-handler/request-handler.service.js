"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandlerService = void 0;
const common_1 = require("@nestjs/common");
let RequestHandlerService = class RequestHandlerService {
    constructor() {
        this.semanticType = true;
        this.responseTime = 5000;
    }
    setSemanticType(semanticType) {
        this.semanticType = semanticType;
    }
    getSemanticType() {
        return this.semanticType;
    }
    async getBalance() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this.semanticType) {
                    res(31);
                }
                else {
                    res('I`m a semantically false response');
                }
            }, this.responseTime);
        });
    }
    getCustomerName() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this.semanticType) {
                    res('Jeff');
                }
                else {
                    res(31);
                }
            }, this.responseTime);
        });
    }
    insertCustomer(customer) {
        return new Promise((res, rej) => {
            if (this.semanticType) {
                res(`Customer ${customer.body} successfully added!`);
            }
            else {
                rej();
            }
        });
    }
    setResponseTime(responseTime) {
        this.responseTime = responseTime;
    }
    getResponseTime() {
        return this.responseTime;
    }
};
RequestHandlerService = __decorate([
    common_1.Injectable()
], RequestHandlerService);
exports.RequestHandlerService = RequestHandlerService;
//# sourceMappingURL=request-handler.service.js.map