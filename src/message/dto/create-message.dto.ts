import {UserEntity} from "../../user/user.entity";
import {ConversationEntity} from "../../conversation/conversation.entity";

export class CreateMessageDto {
    readonly content: string
    readonly timeSent: string
    readonly user: UserEntity
    readonly conversation: ConversationEntity
}