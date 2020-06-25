import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestHandlerService } from './request-handler.service';

/**
 * This component may receive different types of requests
 * and handles them accordingly semantically correct or incorrect
 * with the request-handler service
 */
@Controller('request-handler')
export class RequestHandlerController {
  constructor(private requestHandler: RequestHandlerService) {}

  /**
   * Get requests that attempt to fetch the balance will be handled here
   */
  @Get('balance')
  retrieveBalance() {
    return this.requestHandler.getBalance();
  }

  /**
   * Get requests to the endpoint /customer-data will be handled here
   */
  @Get('customer-name')
  retrieveCustomerName() {
    return this.requestHandler.getCustomerName();
  }


  /**
   * Post requests to the endpoint /add-customer will be handled here
   * @param body the content of the Post-request 
   */
  @Post('add-customer')
  addCustomer(@Body() customer: string){
    
    return this.requestHandler.insertCustomer(customer);
  }
}
