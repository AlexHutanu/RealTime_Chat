import * as dotenv from 'dotenv'
import {DataSource} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {MessageEntity} from "../message/message.entity";
import {ConversationEntity} from "../conversation/conversation.entity";

dotenv.config()

export const connectionSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: true,
    entities: [UserEntity, MessageEntity, ConversationEntity],
    extra: {
        ssl: { rejectUnauthorized: false },
    },
    migrations: {
        path: 'src/database/migrations/*.ts'
    },
    migrationsTableName: 'migrations'
})