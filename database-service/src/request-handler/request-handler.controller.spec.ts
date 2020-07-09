import { Test, TestingModule } from '@nestjs/testing';
import { RequestHandlerController } from './request-handler.controller';

describe('RequestHandler Controller', () => {
  let controller: RequestHandlerController;

  it('a test to test the test', () => {
    expect(true).toBe(true);
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestHandlerController],
    }).compile();

    controller = module.get<RequestHandlerController>(RequestHandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
