import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MissionController } from './mission/mission.controller';
import { MissionModule } from './mission/mission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".development.env", ".env"],
    }),
    AccountModule,
    MissionModule,
  ],
  controllers: [AppController, MissionController],
  providers: [AppService],
})
export class AppModule {}
