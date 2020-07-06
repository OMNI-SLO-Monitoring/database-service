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
    }
    setSemanticType(semanticType) {
        this.semanticType = semanticType;
    }
    getSemanticType() {
        return this.semanticType;
    }
    getBalance() {
        if (this.semanticType) {
            return 31;
        }
        else {
            return 'I`m a semantically false response';
        }
    }
    getCustomerName() {
        if (this.semanticType) {
            return 'Tyler';
        }
        else {
            return 31;
        }
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
};
RequestHandlerService = __decorate([
    common_1.Injectable()
], RequestHandlerService);
exports.RequestHandlerService = RequestHandlerService;
//# sourceMappingURL=request-handler.service.js.map