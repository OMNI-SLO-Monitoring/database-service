import { Test, TestingModule } from '@nestjs/testing';
import { RequestHandlerService } from './request-handler.service';
import { RequestHandlerController } from './request-handler.controller';

/**
 * This is the test class for the request-handler which comprises
 * several tests that probe the result of the functions of the request-handler
 * components upon request
 */
describe('RequestHandlerService', () => {
  let rqService: RequestHandlerService;
  let rqController: RequestHandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestHandlerController],
      providers: [RequestHandlerService],
    }).compile();

    rqService = module.get<RequestHandlerService>(RequestHandlerService);
    rqController = module.get<RequestHandlerController>(
      RequestHandlerController,
    );
  });

  /**
   *This is the test for the function retrieveBalance that should by default
   * return a value of 31.
   */
  it('should return a balance of 31', async () => {
    const expectedResult = 31;
    jest.spyOn(rqService, 'getBalance').mockResolvedValue(31);
    expect(await rqController.retrieveBalance()).toBe(expectedResult);
  });

  /**
   *This is the test for the function retrieveCustomerName that should by default
   * return a the name of "Jeff".
   */
  it('should return the name of Jeff', async () => {
    const expectedResult = 'Jeff';
    jest.spyOn(rqService, 'getCustomerName').mockResolvedValue('Jeff');
    expect(await rqController.retrieveCustomerName()).toBe(expectedResult);
  });

  /**
   *This is the test for the function addCustomer that should by default
   * return a message denoting the success.
   */
  it('should return the name of Jeff', async () => {
    const expectedResult = 'Jeff';
    jest.spyOn(rqService, 'insertCustomer').mockResolvedValue('Jeff');
    expect(await rqController.addCustomer(expectedResult)).toBe(expectedResult);
  });
});
