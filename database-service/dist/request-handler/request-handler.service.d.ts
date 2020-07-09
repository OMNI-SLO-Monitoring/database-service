export declare class RequestHandlerService {
    private semanticType;
    private responseTime;
    setSemanticType(semanticType: boolean): void;
    getSemanticType(): boolean;
    getBalance(): Promise<any>;
    getCustomerName(): Promise<unknown>;
    insertCustomer(customer: any): any;
    setResponseTime(responseTime: number): void;
    getResponseTime(): number;
}
