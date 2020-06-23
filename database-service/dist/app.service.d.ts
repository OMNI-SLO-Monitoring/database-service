export declare class AppService {
    private success;
    private responseTime;
    sendResponseMessage(): Promise<any>;
    setResponseType(success: boolean): void;
    setResponseTime(newResponseTime: number): void;
    getResponseType(): boolean;
    getResponseTime(): number;
}
