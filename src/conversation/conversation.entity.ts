import {Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {MessageEntity} from "../message/message.entity";

@Entity('conversations')
export class ConversationEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => MessageEntity, message => message.conversation)
    messages: MessageEntity[]

    @ManyToMany(() => UserEntity, user => user.conversations)
    @JoinTable()
    users: UserEntity[]
}