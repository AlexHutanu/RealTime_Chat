import {Body, Controller, Post} from '@nestjs/common';
import {ConversationService} from "./conversation.service";
import {ConversationDto} from "./conversation.dto";

@Controller('conversations')
export class ConversationController {
    constructor(private readonly conversationService: ConversationService) {}

    @Post()
    public async createConversation(@Body() conversationDto: ConversationDto) {
        return await this.conversationService.create(conversationDto);
    }
}
