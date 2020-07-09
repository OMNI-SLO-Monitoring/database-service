import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

/**
 * This service is responsible for responding to the requests the request-handler component
 * receives with either semantically correct or incorrect responses
 */
@Injectable()
export class RequestHandlerService {
  //determines semantic correctness of response
  private semanticType: boolean = true;

  //determines response time, default is set to 5 seconds
  private responseTime: number = 5000;

  /**
   * Sets the semantic type (correct/false) for the requests
   * @param semanticType user-adjustable semantic type
   */
  setSemanticType(semanticType: boolean): void {
    this.semanticType = semanticType;
  }

  /**
   * Gets the semantic type (correct/false) for the requests
   */
  getSemanticType(): boolean {
    return this.semanticType;
  }

  /**
   * Returns a fixed balance as a semantically correct
   * response, and a string as a semantically incorrect response
   */
  async getBalance(): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.semanticType) {
          res(31);
        } else {
          res('I`m a semantically false response');
        }
      }, this.responseTime);
    });
  }

  /**
   * Returns fixed customer name as string as semantically correct
   * response, and a simple number as a semantically incorrect response
   */
  getCustomerName() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.semanticType) {
          res('Jeff');
        } else {
          res(31);
        }
      }, this.responseTime);
    });
  }

  /**
   * Simulates a add Customer request.
   * Returns the content of the given body from a Post Request as semantically correct.
   * Otherwise returns error message
   */
  insertCustomer(customer): any {
    return new Promise((res, rej) => {
      if (this.semanticType) {
        res(`Customer ${customer.body} successfully added!`);
      } else {
        rej();
      }
    });
  }

  setResponseTime(responseTime: number): void {
    this.responseTime = responseTime;
  }

  getResponseTime(): number {
    return this.responseTime;
  }
}
