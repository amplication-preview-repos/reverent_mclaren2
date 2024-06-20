import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneratedContentService } from "./generatedContent.service";
import { GeneratedContentControllerBase } from "./base/generatedContent.controller.base";

@swagger.ApiTags("generatedContents")
@common.Controller("generatedContents")
export class GeneratedContentController extends GeneratedContentControllerBase {
  constructor(protected readonly service: GeneratedContentService) {
    super(service);
  }
}
