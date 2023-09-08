import { Controller, Get } from '@nestjs/common';
import { ModeratorsService } from '../../services/moderators/moderators.service';

@Controller('moderators')
export class ModeratorsController {
    constructor(private readonly moderatorsService: ModeratorsService) {}

    @Get()
    async getQaList() {
      const moderators = await this.moderatorsService.getModeratorList();
      return moderators;
    }
}
