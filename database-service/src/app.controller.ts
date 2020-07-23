import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller to handel request, modify its response and time of responding
 */
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  /**
   * get requests will be handled here by sending a response, modifiable in its type (success/error)
   * and response time
   * the app service component is responsible for creating this response and its properties
   */
  @Get()
  async respondToRequest(): Promise<any> {
    return this.appService.sendResponseMessage();
  }

  /**
   * requests to this endpoint will yield the account worth, fetched by the app service
   */
  @Get('account-worth')
  async returnAccountWorth(): Promise<any> {
    return this.appService.getAccountWorth();
  }
}
