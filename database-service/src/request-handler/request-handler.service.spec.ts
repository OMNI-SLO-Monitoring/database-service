import { Test, TestingModule } from '@nestjs/testing';
import { RequestHandlerService } from './request-handler.service';

/**
 * This is the test class for the request-handler service which comprises
 * several tests that probe the result of the functions of the request-handler service
 * components upon request
 */
describe('RequestHandlerService', () => {
  let rqService: RequestHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestHandlerService],
    }).compile();

    rqService = module.get<RequestHandlerService>(RequestHandlerService);
  });

  /**
   * This is the test for the function insertCustomer that should by default
   * return a message denoting the success insertion.
   */
  it('should return a successful insertion message', async () => {
    const customer = { body: 'Dan' };
    expect(await rqService.insertCustomer(customer)).toBe(
      `Customer ${customer.body} successfully added!`,
    );
  });

  /**
   *This is the test for the function getBalance that should by default
   * return a value of 31.
   */
  it('should return a balance of 31', async () => {
    const expectedResult = 31;
    expect(await rqService.getBalance()).toBe(expectedResult);
  });

  /**
   *This is the test for the function getCustomerName that should by default
   * return a the name of "Jeff".
   */
  it('should return the name of Jeff', async () => {
    const expectedResult = 'Jeff';
    expect(await rqService.getCustomerName()).toBe(expectedResult);
  });
});
