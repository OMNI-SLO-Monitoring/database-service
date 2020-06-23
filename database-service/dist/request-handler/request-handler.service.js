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
        this.falseResponse = 'I`m a semantically false response';
    }
    getBalance() {
        if (this.semanticType) {
            return 31;
        }
        else {
            return this.falseResponse;
        }
    }
    getCustomerData() {
        if (this.semanticType) {
            return {
                'first name': 'Tyler',
                'last name': 'Durden',
                age: '36',
            };
        }
        else {
            return this.falseResponse;
        }
    }
};
RequestHandlerService = __decorate([
    common_1.Injectable()
], RequestHandlerService);
exports.RequestHandlerService = RequestHandlerService;
//# sourceMappingURL=request-handler.service.js.map