import { Test, TestingModule } from '@nestjs/testing';
import { ResponseModificationController } from './response-modification.controller';

describe('ResponseModification Controller', () => {
  let controller: ResponseModificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponseModificationController],
    }).compile();

    controller = module.get<ResponseModificationController>(ResponseModificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
