import { Injectable } from '@nestjs/common';
/**
 * Class with the Main-Functions of the Database Services.
 * It is possible to change the type of response, either success or error.
 * The response time can also be determined.
 */
@Injectable()
export class AppService {
  //determines type of response, that is success or error, default is set to success
  private success: boolean = true;

  //determines response time, default is set to 5 seconds
  private responseTime: number = 5000;

  /**
   * returns a response message in form a promise
   * a resolved promise is returned if success is true, meaning the response type is a success.
   * Otherwise a rejected promise is returned, meaning the response type is an error
   *
   * @returns promise which is resolved if the success variable is true and rejected otherwise
   */
  async sendResponseMessage(): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.success) {
          res('Ok');
        } else {
          rej();
        }
      }, this.responseTime);
    });
  }

  /**
   * returns the account worth as a promise after a certain adjustable timeout.
   * Promise is either resolved if the response type
   * is set to be a success or rejected if the response type is set to fail
   *
   * @returns promise which is contains a number representing the account worth when resolved
   * if the success variable is true and is rejected otherwise
   */
  async getAccountWorth(): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.success) {
          res(9000);
        } else {
          rej();
        }
      }, this.responseTime);
    });
  }

  setResponseType(success: boolean): void {
    this.success = success;
  }

  setResponseTime(newResponseTime: number): void {
    this.responseTime = newResponseTime;
  }

  getResponseType(): boolean {
    return this.success;
  }

  getResponseTime(): number {
    return this.responseTime;
  }
}
