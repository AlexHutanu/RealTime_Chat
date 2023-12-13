import {IsNotEmpty} from "class-validator";
import {MessageEntity} from "../message/message.entity";
import {UserEntity} from "../user/user.entity";

export class ConversationDto {
    @IsNotEmpty()
    readonly id: number
    readonly messages: MessageEntity[]
    @IsNotEmpty()
    readonly users: UserEntity[]
}