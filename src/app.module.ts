import { Module } from '@nestjs/common';
import { GateawayModule } from './gateaway/gateaway.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import {MessageModule} from "./message/message.module";
import { ConversationModule } from './conversation/conversation.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true}),
    GateawayModule, UserModule, DatabaseModule,
    MessageModule, ConversationModule],
})
export class AppModule {}
