import { Test, TestingModule } from '@nestjs/testing';
import { RequestHandlerService } from './request-handler.service';

describe('RequestHandlerService', () => {
  let service: RequestHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestHandlerService],
    }).compile();

    service = module.get<RequestHandlerService>(RequestHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
