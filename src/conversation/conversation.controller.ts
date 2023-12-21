import {Body, Controller, Post} from '@nestjs/common';
import {ConversationService} from "./conversation.service";
import {ConversationDto} from "./conversation.dto";
import {UserEntity} from "../user/user.entity";

@Controller('conversations')
export class ConversationController {
    constructor(private readonly conversationService: ConversationService) {}

    @Post()
    public async createConversation(@Body() conversationDto: ConversationDto) {
        const users: UserEntity[] = conversationDto.users
        return this.conversationService.create(users)
    }
}