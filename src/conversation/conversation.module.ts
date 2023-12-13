import { Module } from '@nestjs/common';
import { ConversationController } from './conversation.controller';
import { ConversationService } from './conversation.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConversationEntity} from "./conversation.entity";

@Module({
  controllers: [ConversationController],
  providers: [ConversationService],
  imports: [TypeOrmModule.forFeature([ConversationEntity])]
})
export class ConversationModule {}
