import {Body, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ConversationEntity} from "./conversation.entity";
import {Repository} from "typeorm";
import {ConversationDto} from "./conversation.dto";

@Injectable()
export class ConversationService {
    constructor (
        @InjectRepository(ConversationEntity)
        private readonly conversationRepository: Repository<ConversationEntity>
    ) {}

    async create(@Body() conversationDto: ConversationDto) {
        const conversationEntity = this.conversationRepository.create(conversationDto)
        await this.conversationRepository.insert(conversationEntity)
        return conversationEntity
    }
}
