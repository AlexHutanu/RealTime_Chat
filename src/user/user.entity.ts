import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import {IUser} from "./user.interface";
import {MessageEntity} from "../message/message.entity";
import {ConversationEntity} from "../conversation/conversation.entity";
import {JoinColumn} from "typeorm";

@Entity('users')
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    readonly name: string

    @Column()
    readonly email: string

    @Column()
    readonly password: string

    @ManyToMany(() => ConversationEntity)
    conversations: ConversationEntity[]

    @OneToMany(() => MessageEntity, message => message.user)
    @JoinColumn()
    message: MessageEntity[]
}