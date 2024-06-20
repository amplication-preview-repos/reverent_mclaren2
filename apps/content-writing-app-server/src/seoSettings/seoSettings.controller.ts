import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SeoSettingsService } from "./seoSettings.service";
import { SeoSettingsControllerBase } from "./base/seoSettings.controller.base";

@swagger.ApiTags("seoSettings")
@common.Controller("seoSettings")
export class SeoSettingsController extends SeoSettingsControllerBase {
  constructor(protected readonly service: SeoSettingsService) {
    super(service);
  }
}
