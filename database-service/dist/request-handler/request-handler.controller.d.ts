import { RequestHandlerService } from './request-handler.service';
export declare class RequestHandlerController {
    private requestHandler;
    constructor(requestHandler: RequestHandlerService);
    retrieveBalance(): any;
    retrieveCustomerName(): any;
    addCustomer(customer: any): any;
}
