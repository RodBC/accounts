import { Test, TestingModule } from '@nestjs/testing';
import { ChangePassController } from './change-pass.controller';
import { ChangePassService } from './change-pass.service';

describe('ChangePassController', () => {
  let controller: ChangePassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChangePassController],
      providers: [ChangePassService],
    }).compile();

    controller = module.get<ChangePassController>(ChangePassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
