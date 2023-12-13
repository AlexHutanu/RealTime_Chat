import {Body, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MessageEntity} from "./message.entity";
import {Repository} from "typeorm";
import {CreateMessageDto} from "./dto/create-message.dto";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageEntity)
        private readonly messageRepository: Repository<MessageEntity>
    ) {}

    findMessages(id: number) {
        return this.messageRepository.findBy({id})
    }

    async create (@Body() createMessageDto: CreateMessageDto) {
        const messageEntity = this.messageRepository.create(createMessageDto)
        await this.messageRepository.insert(messageEntity)
        return messageEntity
    }
}