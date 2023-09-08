/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Delete, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QaService } from '../services/qa.service';
import { Qa } from '../interface/qa.interface';

@Controller('qa')
export class QaController {
    constructor(private readonly qaService: QaService) {}

  @Get()
  async getQaList() {
    const qa = await this.qaService.getQas();
    return qa;
  }

  @Get('search?')
  async findQa(
    @Query('keyword') keyValue: string
  ){
    const qa = await this.qaService.searchQas(keyValue);
    return qa;
  }

  @Get(':id')
  async getQa(@Param() qa: any) {
    return this.qaService.findQas(qa.id);
  }

  @Get('community/:id')
  async getQaByCommunityId(@Param() community: any) {
    return this.qaService.findQasByCommunity(community.id);
  }

  @Get('moderator/:id')
  getQaByModeratorId(@Param() moderator: any) {
    return this.qaService.findQasByModerator(moderator.id);
  }

  @Get('bookmarks/:id')
  getqaByModeratorBookmarks(@Param() moderator: any) {
    return this.qaService.findQasByModeratorBookmarks(moderator.id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createModerator(@Body() qa: Qa) {
    return this.qaService.addQa(qa);
  }

  @Delete('delete/:id')
  async removeQa(@Param('id') qa: any) {
    await this.qaService.deleteQa(qa);
    return { qaId: qa };
  }
}
