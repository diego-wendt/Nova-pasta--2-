import { Module } from "@nestjs/common";
import { CompaniesService } from "./service/companies.service";
import { CompaniesController } from "./controller/companies.controller";
import { DatabaseProviders } from "src/core/database/database.providers";
import { CompanyProviders } from "./companies.providers";

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, ...DatabaseProviders, ...CompanyProviders],
})
export class CompaniesModule {}
