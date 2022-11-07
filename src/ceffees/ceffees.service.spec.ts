import { Test, TestingModule } from '@nestjs/testing';
import { CeffeesService } from './ceffees.service';

describe('CeffeesService', () => {
  let service: CeffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CeffeesService],
    }).compile();

    service = module.get<CeffeesService>(CeffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
