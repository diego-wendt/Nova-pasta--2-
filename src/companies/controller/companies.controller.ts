import { Controller } from "@nestjs/common";
import { CompaniesService } from "../service/companies.service";

@Controller("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}
}
