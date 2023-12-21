import {Body, Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MessageEntity} from "./message.entity";
import {Repository} from "typeorm";
import {CreateMessageDto} from "./dto/create-message.dto";
import {UserEntity} from "../user/user.entity";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageEntity)
        private readonly messageRepository: Repository<MessageEntity>,

        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async findMessagesByUser(userId: number){
        try {
            const userMessages = await this.messageRepository.find({
                where: { user: { id: userId } },
            });

            if (!userMessages || userMessages.length === 0) {
                throw new NotFoundException('No messages found for the specified user.');
            }

            return userMessages;
        } catch (error) {
            throw new NotFoundException('No messages found for the specified user.');
        }
    }
    findMessage(id: number) {
        return this.messageRepository.findOneBy({id})
    }

    async create(@Body() createMessageDto: CreateMessageDto) {
        const messageEntity = this.messageRepository.create(createMessageDto)
        await this.messageRepository.insert(messageEntity)
        return messageEntity
    }
}