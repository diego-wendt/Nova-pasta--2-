import { Module } from "@nestjs/common";
import { PlacesService } from "./service/places.service";
import { PlacesController } from "./controller/places.controller";
import { DatabaseProviders } from "src/core/database/database.providers";
import { PlacesProviders } from "./places.providers";

@Module({
  controllers: [PlacesController],
  providers: [PlacesService, ...DatabaseProviders, ...PlacesProviders],
})
export class PlacesModule {}
