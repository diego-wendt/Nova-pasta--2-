import { Module } from "@nestjs/common";
import { DevicesService } from "./service/devices.service";
import { DevicesController } from "./controller/devices.controller";
import { DatabaseProviders } from "src/core/database/database.providers";
import { DeviceProviders } from "./devices.providers";

@Module({
  controllers: [DevicesController],
  providers: [DevicesService, ...DatabaseProviders, ...DeviceProviders],
})
export class DevicesModule {}
