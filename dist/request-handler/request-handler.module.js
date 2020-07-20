"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandlerModule = void 0;
const common_1 = require("@nestjs/common");
const request_handler_controller_1 = require("./request-handler.controller");
const request_handler_service_1 = require("./request-handler.service");
let RequestHandlerModule = class RequestHandlerModule {
};
RequestHandlerModule = __decorate([
    common_1.Module({
        controllers: [request_handler_controller_1.RequestHandlerController],
        providers: [request_handler_service_1.RequestHandlerService],
        exports: [request_handler_service_1.RequestHandlerService],
    })
], RequestHandlerModule);
exports.RequestHandlerModule = RequestHandlerModule;
//# sourceMappingURL=request-handler.module.js.map