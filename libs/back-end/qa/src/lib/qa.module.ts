import { Module } from '@nestjs/common';
import { QaDetails } from './typeorm/QuestionDetails';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QaController } from './controller/qa.controller';
import { QaService } from './services/qa.service';

@Module({
  imports: [TypeOrmModule.forFeature([QaDetails])],
  controllers: [QaController],
  providers: [QaService],
  exports: [],
})
export class QaModule {}
