import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * This is a unit test for the database-service's router handler. It contains a test
 * that assesses the value of the function that fetches the account worth and also probes whether
 * or not an ordinary message can be returned upon request.
 */
describe('App Controller', () => {
  jest.mock('./app.service');

  let controller: AppController;
  let appService: AppService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  /**
   * This is the test for the function returnAccountWorth that should by default
   * return a value of 9000.
   */
  it('should return the account worth of 9000', async () => {
    const expectedResult = 9000;
    jest.spyOn(appService, 'getAccountWorth').mockResolvedValue(9000);
    expect(await controller.returnAccountWorth()).toBe(expectedResult);
  });

  /**
   * This is the test for the function respondToRequest that should by default
   * return a value of "Ok".
   */
  it('should return ok', async () => {
    const expectedResult = 'Ok';
    jest.spyOn(appService, 'sendResponseMessage').mockResolvedValue('Ok');
    expect(await controller.respondToRequest()).toBe(expectedResult);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
