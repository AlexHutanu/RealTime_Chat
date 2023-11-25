import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GateawayModule } from './gateaway/gateaway.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GateawayModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
