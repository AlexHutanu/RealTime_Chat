import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from "../user/user.entity";
import {MessageEntity} from "../message/message.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DB_HOST'),
        port: configService.getOrThrow('DB_PORT'),
        database: configService.getOrThrow('DB_DATABASE'),
        username: configService.getOrThrow('DB_USERNAME'),
        password: configService.getOrThrow('DB_PASSWORD'),
        autoLoadEntities: true,
        ssl: true,
        migrations: ["dist/migrations/*{.ts,.js}"],
        entities: [UserEntity, MessageEntity],
        extra: {
          ssl: { rejectUnauthorized: false },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
