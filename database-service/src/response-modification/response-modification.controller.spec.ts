import { Test, TestingModule } from '@nestjs/testing';
import { ResponseModificationController } from './response-modification.controller';
import { AppService } from '../app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';
import { CpuUtilizationModule } from "cpu-utilization-observer";


describe('ResponseModification Controller', () => {

jest.mock("../app.service")
jest.mock("cpu-utilization-observer")

it('a test to test the e2e test', () => {
  expect(true).toBe(true);
});

  let responseModificationController: ResponseModificationController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CpuUtilizationService, CpuUtilizationModule],
      controllers: [ResponseModificationController],
      providers:   [AppService]
    }).compile();

    responseModificationController = module.get<ResponseModificationController>(ResponseModificationController);
    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(responseModificationController).toBeDefined();
  });
  
  afterEach(() => {
    jest.resetAllMocks();
 });
  
});
