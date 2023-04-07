import { Controller } from "@nestjs/common";
import { PlacesService } from "../service/places.service";

@Controller("places")
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
}
