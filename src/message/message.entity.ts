import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity("messages")
export class MessageEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    timeSent: string

    @ManyToOne(() => UserEntity, user => user.id)
    user: UserEntity
}