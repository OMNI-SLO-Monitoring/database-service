import { Test, TestingModule } from '@nestjs/testing';
import { ResponseModificationController } from './response-modification.controller';
import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
import { CpuUtilizationModule } from 'cpu-utilization-observer';
import { RequestHandlerService } from '../request-handler/request-handler.service';

describe('ResponseModification Controller', () => {
  jest.mock('../app.service');
  jest.mock('cpu-utilization-observer');
  jest.mock('../request-handler/request-handler.service');

  let responseModificationController: ResponseModificationController;
  let appService: AppService;
  let requestHandlerService: RequestHandlerService;
  let cpuUtilizationService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CpuUtilizationService, CpuUtilizationModule],
      controllers: [ResponseModificationController],
      providers: [AppService, RequestHandlerService, CpuUtilizationService],
    }).compile();

    responseModificationController = module.get<ResponseModificationController>(
      ResponseModificationController,
    );
    appService = module.get<AppService>(AppService);
    requestHandlerService = module.get<RequestHandlerService>(
      RequestHandlerService,
    );
    cpuUtilizationService = module.get<CpuUtilizationService>(
      CpuUtilizationService,
    );
  });

  it('should be defined', () => {
    expect(responseModificationController).toBeDefined();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
