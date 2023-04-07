import { Controller } from "@nestjs/common";
import { UserDevicesDataService } from "../service/userDevicesData.service";

@Controller("user-devices")
export class UserDevicesDataController {
  constructor(
    private readonly userDevicesDataService: UserDevicesDataService,
  ) {}
}
