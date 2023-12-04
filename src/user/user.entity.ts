import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable} from "typeorm";
import {IUser} from "./user.interface";
import {MessageEntity} from "../message/message.entity";
import {ConversationEntity} from "../conversation/conversation.entity";

@Entity('users')
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    readonly name: string

    @Column()
    readonly email: string;

    @Column()
    readonly password: string;

    @ManyToMany(() => ConversationEntity)
    @JoinTable()
    conversations: ConversationEntity[];

    @OneToMany(() => MessageEntity, message => message.user)
    message: MessageEntity
}