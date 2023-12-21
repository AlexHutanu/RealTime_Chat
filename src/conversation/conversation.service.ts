import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ConversationEntity} from "./conversation.entity";
import {Repository} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Injectable()
export class ConversationService {
    constructor (
        @InjectRepository(ConversationEntity)
        private readonly conversationRepository: Repository<ConversationEntity>
    ) {}

    async create(users: UserEntity[]): Promise<ConversationEntity> {
        const newConversation = this.conversationRepository.create({users})
        return this.conversationRepository.save(newConversation)
    }
}