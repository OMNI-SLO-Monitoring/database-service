import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuUtilizationService } from 'cpu-utilization-observer';



describe('ResponseModification Controller', () => {
  jest.mock("./app.service")

  let controller: AppController;
  let appService: AppService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers:   [AppService]
    }).compile();

    controller = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(AppController).toBeDefined();
  });

  afterEach(() => {
    jest.resetAllMocks();
 });

});
