import {Module} from "@nestjs/common";
import {MessageController} from "./message.controller";
import {MessageService} from "./message.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "./message.entity";

@Module({
    controllers: [MessageController],
    providers: [MessageService],
    imports: [TypeOrmModule.forFeature([MessageEntity])]
})

export class MessageModule {}