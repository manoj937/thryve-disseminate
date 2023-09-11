import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { QaDetails } from '../typeorm/QuestionDetails';
import { DataSource, Like, Repository } from 'typeorm';
import { Qa } from '../interface/qa.interface';
import { CreateQaDto } from '../dto/CreateQuestion.dto';

@Injectable()
export class QaService {
  constructor(
    @InjectRepository(QaDetails)
    private readonly qasRepository: Repository<QaDetails>,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  getQas() {
    const qas = this.qasRepository.find().then((qas) => {
      return qas.map((qa) => ({
        qaId: qa.qaId,
        moderatorId: qa.moderatorId,
        communityId: qa.communityId,
        question: qa.question,
        bookmarks: qa.bookmarks.split(',').filter((t) => t.length > 3),
        tags: qa.tags.split(',').filter((t) => t.length > 3),
        detail: qa.detail,
        time: qa.time,
        answers: qa.answers.split(',').filter((t) => t.length > 3),
        selectedAnswers: qa.selectedAnswers.split(',').filter((t) => t.length > 3)
      }));
    });
    return qas;
  }

  async findQas(qaId: string) {
    const qas = await this.getQas();
    return qas.filter((qa) => qa.qaId === qaId);
  }

  async findQasByCommunity(communityId: string) {
    const qas = await this.getQas();
    return qas.filter((qa) => qa.communityId === communityId);
  }

  async findQasByModerator(moderatorId: string) {
    const qas = await this.getQas();
    return qas.filter((qa) => qa.moderatorId === moderatorId);
  }

  async findQasByModeratorBookmarks(moderatorId: string) {
    const qas = await this.getQas();
    return qas.filter((qa) => qa.bookmarks.includes(moderatorId));
  }

  setQaId(qas: Qa[], id: number) {
    const qaId = 'QA' + ('00' + id).slice(-3);
    for (const qa of qas) {
      if (qa.qaId === qaId) {
        this.setQaId(qas, id + 1);
      }
    }
    return qaId;
  }

  async searchQas(keyValue: string) {
    return (await this.qasRepository.find({
      where: {
        question: Like(`%${keyValue}%`),
      },
    })).map((qa) => ({
      qaId: qa.qaId,
      moderatorId: qa.moderatorId,
      communityId: qa.communityId,
      question: qa.question,
      bookmarks: qa.bookmarks.split(',').filter((t) => t.length > 3),
      tags: qa.tags.split(',').filter((t) => t.length > 3),
      detail: qa.detail,
      time: qa.time,
      answers: qa.answers.split(',').filter((t) => t.length > 3),
      selectedAnswers: qa.selectedAnswers.split(',').filter((t) => t.length > 3)
    }));
  }

  async addQa(qaInfo: Qa) {
    const qas = await this.getQas();
    const qaId = this.setQaId(qas, qas.length);
    let newqa = false;
    const createqaDto: CreateQaDto = {
      qaId,
      moderatorId: qaInfo.moderatorId,
      communityId: qaInfo.communityId,
      question: qaInfo.question,
      tags: String(qaInfo.tags),
      bookmarks: String(qaInfo.bookmarks),
      detail: qaInfo.detail,
      time: qaInfo.time,
      answers: String(qaInfo.answers),
      selectedAnswers: String(qaInfo.selectedAnswers)
    };

    for (const qa of qas) {
      if (qa.question === qaInfo.question) {
        return {
          status: 'Error',
          message: 'qa already exist',
        };
      } else {
        newqa = true;
      }
    }
    if (newqa || !qas.length) {
      const addqa = this.qasRepository.create(createqaDto);
      return this.qasRepository.save(addqa);
    } else {
      return 0;
    }
  }

  async deleteQa(id: string) {
    const result = this.qasRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the question.');
    }
  }
}
