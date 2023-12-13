import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {ConversationEntity} from "../conversation/conversation.entity";

@Entity("messages")
export class MessageEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    timeSent: string

    @ManyToOne(() => ConversationEntity, conversation => conversation.messages)
    @JoinColumn()
    conversation: ConversationEntity

    @ManyToOne(() => UserEntity, user => user.message)
    @JoinColumn()
    user: UserEntity
}