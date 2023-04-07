import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { PlacesModule } from "./places/places.module";
import { DevicesModule } from "./devices/devices.module";
import { CompaniesModule } from "./companies/companies.module";
import { AuthModule } from "./auth/auth.module";
import { ModelDevicesModule } from "./modelDevices/modelDevices.module";
import { UserDevicesDataModule } from "./userDevicesData/userDevicesData.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    PlacesModule,
    DevicesModule,
    CompaniesModule,
    AuthModule,
    ModelDevicesModule,
    UserDevicesDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
