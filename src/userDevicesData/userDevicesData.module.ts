import { Module } from "@nestjs/common";
import { UserDevicesDataService } from "./service/userDevicesData.service";
import { UserDevicesDataController } from "./controller/userDevicesData.controller";
import { DatabaseProviders } from "src/core/database/database.providers";
import { UserDevicesDataProviders } from "./userDevicesData.providers";

@Module({
  controllers: [UserDevicesDataController],
  providers: [
    UserDevicesDataService,
    ...DatabaseProviders,
    ...UserDevicesDataProviders,
  ],
})
export class UserDevicesDataModule {}
