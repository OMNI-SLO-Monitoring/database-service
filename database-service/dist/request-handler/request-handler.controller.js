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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandlerController = void 0;
const common_1 = require("@nestjs/common");
const request_handler_service_1 = require("./request-handler.service");
let RequestHandlerController = class RequestHandlerController {
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }
    retrieveBalance() {
        return this.requestHandler.getBalance();
    }
    retrieveCustomerName() {
        return this.requestHandler.getCustomerName();
    }
    addCustomer(customer) {
        console.log(customer.body);
        return this.requestHandler.insertCustomer(customer);
    }
};
__decorate([
    common_1.Get('balance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RequestHandlerController.prototype, "retrieveBalance", null);
__decorate([
    common_1.Get('customer-name'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RequestHandlerController.prototype, "retrieveCustomerName", null);
__decorate([
    common_1.Post('add-customer'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RequestHandlerController.prototype, "addCustomer", null);
RequestHandlerController = __decorate([
    common_1.Controller('request-handler'),
    __metadata("design:paramtypes", [request_handler_service_1.RequestHandlerService])
], RequestHandlerController);
exports.RequestHandlerController = RequestHandlerController;
//# sourceMappingURL=request-handler.controller.js.map