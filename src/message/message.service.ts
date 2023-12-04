import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MessageEntity} from "./message.entity";
import {Repository} from "typeorm";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageEntity)
        private readonly messageRepository: Repository<MessageEntity>
    ) {}

    findMessages(id: number) {
        return this.messageRepository.findBy({id})
    }
}