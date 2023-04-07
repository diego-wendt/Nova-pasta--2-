import { Controller } from "@nestjs/common";
import { ModelDevicesService } from "../service/modelDevices.service";

@Controller("modelDevices")
export class ModelDevicesController {
  constructor(private readonly modelDevicesService: ModelDevicesService) {}
}
