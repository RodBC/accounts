import { Test, TestingModule } from '@nestjs/testing';
import { ChangePassService } from './change-pass.service';

describe('ChangePassService', () => {
  let service: ChangePassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangePassService],
    }).compile();

    service = module.get<ChangePassService>(ChangePassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
