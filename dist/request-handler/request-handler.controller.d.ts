import { RequestHandlerService } from './request-handler.service';
export declare class RequestHandlerController {
    private requestHandler;
    constructor(requestHandler: RequestHandlerService);
    retrieveBalance(): Promise<any>;
    retrieveCustomerData(): Promise<any>;
}
