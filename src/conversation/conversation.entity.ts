import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('conversations')
export class ConversationEntity {
    @PrimaryGeneratedColumn()
    id: number
}