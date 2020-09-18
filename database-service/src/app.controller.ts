import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller to handle request to default and /account-worth endpoint
 */
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  /**
   * get requests will be handled here by sending a response
   * response type (error/succes) and responnse time may varie depending on
   * the input settings in the app service
   */
  @Get()
  async respondToRequest(): Promise<any> {
    return this.appService.sendResponseMessage();
  }

  /**
   * requests to this endpoint will yield the account worth, fetched by the app service
   * response type (error/succes) and response time depend on settings in app service
   */
  @Get('account-worth')
  async returnAccountWorth(): Promise<any> {
    return this.appService.getAccountWorth();
  }
}
