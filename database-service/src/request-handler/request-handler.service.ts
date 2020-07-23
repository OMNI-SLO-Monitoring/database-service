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

  getSemanticType(): boolean {
    return this.semanticType;
  }

  /**
   * A method that returns a number representing a fixed balance as semantically
   * correct response and returns a string as semantically incorrect response.
   *
   * @returns promise that contains a number representing a fixed balance
   * when it is resolved which occurs if the variable semanticType is true
   * and contains a simple string otherwise
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
   * A method that returns a string representing a customer name as semantically
   * correct response and returns a number as semantically incorrect response.
   *
   * @returns promise that contains a string representing a customer name
   * when it is resolved which occurs if the variable semanticType is true
   * and contains a number otherwise
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
   * A method that simulates adding a customer as a semantically
   * correct behavior and rejects it as a semantically incorrect
   * behavior.
   *
   * @return promise which contains a response message signalizing
   * that a customer has been added when it is resolved which occurs
   * if the variable semanticType is true and is rejected otherwise
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
