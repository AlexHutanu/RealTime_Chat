import {Controller, Get, Param} from "@nestjs/common";
import {MessageService} from "./message.service";

@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get(':id')
    public getMessages(@Param('id') id: number) {
        return this.messageService.findMessages(id)
    }
}
