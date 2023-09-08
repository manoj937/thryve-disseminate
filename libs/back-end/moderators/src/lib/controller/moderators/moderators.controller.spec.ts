import { Test, TestingModule } from '@nestjs/testing';
import { ModeratorsController } from './moderators.controller';

describe('ModeratorsController', () => {
  let controller: ModeratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModeratorsController],
    }).compile();

    controller = module.get<ModeratorsController>(ModeratorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
