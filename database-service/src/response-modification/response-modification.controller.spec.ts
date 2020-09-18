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

    //faster response time so jest doesnt recognise timeout
    appService.setResponseTime(500);
  });

  it('should be defined', () => {
    expect(responseModificationController).toBeDefined();
  });


  it('should change response times', () => {
    const mockModification = {
      responseTime: 1000
    }

    responseModificationController.applyModifications(mockModification);

    expect(appService.getResponseTime()).toBe(mockModification.responseTime);
    expect(requestHandlerService.getResponseTime()).toBe(mockModification.responseTime);
  });

  it('should correctly change responseType', async () => {
    const mockModification = {
      responseSuccessChecked: true
    }

    responseModificationController.applyModifications(mockModification);
    expect(await appService.sendResponseMessage()).toBe('Ok')

    mockModification.responseSuccessChecked = false;
    responseModificationController.applyModifications(mockModification);
    return await appService.sendResponseMessage().catch(e => expect(e).toBeUndefined());
  });

  it('should correctly set semantical correcntess', async () => {
    const mockModification = {
      correctResponseChecked : true
    }
    requestHandlerService.setResponseTime(10);

    //semantically correct responses
    responseModificationController.applyModifications(mockModification);
    expect(await requestHandlerService.getBalance()).toBe(31);
    expect(await requestHandlerService.getCustomerName()).toBe('Jeff');

    //semantically incorrect responses
    mockModification.correctResponseChecked = false;
    responseModificationController.applyModifications(mockModification);
    expect(await requestHandlerService.getBalance()).toBe('Jeff');
    expect(await requestHandlerService.getCustomerName()).toBe(31);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
