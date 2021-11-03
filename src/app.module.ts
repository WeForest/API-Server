import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "./account/account.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { MissionModule } from "./mission/mission.module";
import { ProfileModule } from "./profile/profile.module";
import { GroupController } from './group/group.controller';
import { GroupModule } from './group/group.module';
import { GroupController } from './group/group.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".development.env", ".env"],
    }),
    AccountModule,
    MissionModule,
    ProfileModule,
    GroupModule,
  ],
  controllers: [AppController, GroupController],
  providers: [AppService],
})
export class AppModule {}
