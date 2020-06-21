import { Injectable } from '@nestjs/common';

/**
 * This service is responsible for responding to the requests the request-handler component
 * receives with either semantically correct or incorrect responses
 */
@Injectable()
export class RequestHandlerService {
  //determines semantic correctness of response
  semanticType: boolean = true;
  //basic semantically incorrect response
  falseResponse: string = 'I`m a semantically false response';

  /**
   * Returns a fixed balance as a semantically correct
   * response, and a string as a semantically incorrect response
   */
  getBalance(): any {
    if (this.semanticType) {
      return 31;
    } else {
      return this.falseResponse;
    }
  }

  /**
   * Returns fixed customer data in JSON as semantically correct
   * response, and a simple string as a semantically incorrect response
   */
  getCustomerData(): any {
    if (this.semanticType) {
      return {
        'first name': 'Tyler',
        'last name': 'Durden',
        age: '36',
      };
    } else {
      return this.falseResponse;
    }
  }
}
