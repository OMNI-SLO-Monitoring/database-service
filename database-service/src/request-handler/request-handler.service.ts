import { Injectable } from '@nestjs/common';

/**
 * This service is responsible for responding to the requests the request-handler component
 * receives with either semantically correct or incorrect responses
 */
@Injectable()
export class RequestHandlerService {

  
  //determines semantic correctness of response
  semanticType: boolean = true;

  /**
   * Returns a fixed balance as a semantically correct
   * response, and a string as a semantically incorrect response
   */
  getBalance(): any {
    if (this.semanticType) {
      return 31;
    } else {
      return 'I`m a semantically false response';
    }
  }

  /**
   * Returns fixed customer name as string as semantically correct
   * response, and a simple number as a semantically incorrect response
   */
  getCustomerName(): any {
    if (this.semanticType) {
      return 'Tyler';
    } else {
      return 31;
    }
  }

  /**
   * Simulates a add Customer request.
   * Returns the content of the given body from a Post Request as semantically correct.
   * Otherwise returns error message
   */
  insertCustomer(customer: string): any {
    return new Promise((res, rej) => {
      if(this.semanticType) {
        res(`Customer: ${customer} successfully added`);
      } else {
        rej(`Failed to add customer.`);
      }
    })
  }
}
