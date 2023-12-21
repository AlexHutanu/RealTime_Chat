import {IsNotEmpty} from "class-validator";
import {MessageEntity} from "../message/message.entity";
import {UserEntity} from "../user/user.entity";

export class ConversationDto {
    readonly messages: MessageEntity[]
    @IsNotEmpty()
    readonly users: UserEntity[]
}